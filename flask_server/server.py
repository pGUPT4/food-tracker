from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler


app = Flask(__name__)

CORS(app, supports_credentials=True)

def clean_data(df):
    #Data Clean
    drop_set1 = ['Serving Weight 2 (g)',
             'Serving Weight 3 (g)',
             'Serving Weight 4 (g)',
             'Serving Weight 5 (g)',
             'Serving Weight 6 (g)',
             'Serving Weight 7 (g)',
             'Serving Weight 8 (g)',
             'Serving Weight 9 (g)',
             'Serving Description 2 (g)',
             'Serving Description 3 (g)',
             'Serving Description 4 (g)',
             'Serving Description 5 (g)',
             'Serving Description 6 (g)',
             'Serving Description 7 (g)',
             'Serving Description 8 (g)',
             'Serving Description 9 (g)']

    drop_set2 = ['Saturated Fats (g)',
             'Vitamin A, RAE (mcg)',
             'Added Sugar (g)',
             'Net-Carbs (g)',
             'Water (g)',
             'Omega 3s (mg)',
             'Omega 6s (mg)',
             'PRAL score',
             'Trans Fatty Acids (g)',
             'Soluble Fiber (g)',
             'Insoluble Fiber (g)',
             'Sucrose (g)',
             'Glucose (Dextrose) (g)',
             'Fructose (g)',
             'Lactose (g)',
             'Maltose (g)',
             'Galactose (g)',
             'Starch (g)',
             'Total sugar alcohols (g)',
             'Phosphorus, P (mg)',
             'Sodium (mg)',
             'Zinc, Zn (mg)',
             'Copper, Cu (mg)',
             'Manganese (mg)',
             'Selenium, Se (mcg)',
             'Fluoride, F (mcg)']

    drop_set3 = ['Molybdenum (mcg)',
             'Chlorine (mg)',
             'Thiamin (B1) (mg)',
             'Riboflavin (B2) (mg)',
             'Niacin (B3) (mg)',
             'Pantothenic acid (B5) (mg)',
             'Vitamin B6 (mg)',
             'Biotin (B7) (mcg)',
             'Folate (B9) (mcg)',
             'Folic acid (mcg)',
             'Food Folate (mcg)',
             'Folate DFE (mcg)',
             'Choline (mg)',
             'Betaine (mg)',
             'Retinol (mcg)',
             'Carotene, beta (mcg)',
             'Carotene, alpha (mcg)',
             'Lycopene (mcg)',
             'Lutein + Zeaxanthin (mcg)',
             'Vitamin D2 (ergocalciferol) (mcg)',
             'Vitamin D3 (cholecalciferol) (mcg)',
             'Vitamin D (IU) (IU)',
             'Vitamin K (mcg)',
             'Dihydrophylloquinone (mcg)',
             'Menaquinone-4 (mcg)',
             'Fatty acids, total monounsaturated (mg)',
             'Fatty acids, total polyunsaturated (mg)',
             '18:3 n-3 c,c,c (ALA) (mg)',
             '20:5 n-3 (EPA) (mg)',
             '22:5 n-3 (DPA) (mg)',
             '22:6 n-3 (DHA) (mg)',
             'Tryptophan (mg)']


    drop_set4 = ['Threonine (mg)',
             'Isoleucine (mg)',
             'Leucine (mg)',
             'Lysine (mg)',
             'Methionine (mg)',
             'Cystine (mg)',
             'Phenylalanine (mg)',
             'Tyrosine (mg)',
             'Valine (mg)',
             'Arginine (mg)',
             'Histidine (mg)',
             'Alanine (mg)',
             'Aspartic acid (mg)',
             'Glutamic acid (mg)',
             'Glycine (mg)',
             'Proline (mg)',
             'Serine (mg)',
             'Hydroxyproline (mg)',
             'Alcohol (g)',
             'Caffeine (mg)',
             'Theobromine (mg)',
             '200 Calorie Weight (g)']

    drop_set5 = ['Potassium, K (mg)',
             'Magnesium (mg)']

    merged_drop_list = drop_set1 + drop_set2 + drop_set3 + drop_set4 + drop_set5

    df.drop(merged_drop_list, inplace= True, axis = 1)
    df.drop(['Cholesterol (mg)',
             'Calcium (mg)',
             'Iron, Fe (mg)',
             'Vitamin A, IU (IU)',
             'Vitamin C (mg)', 
             'Vitamin B-12 (mcg)',
             'Vitamin D (mcg)',
             'Vitamin E (Alpha-Tocopherol) (mg)',
             'Serving Weight 1 (g)', 
             'Serving Description 1 (g)'], inplace= True, axis = 1)

    return df

def process_data(df):
    for feature in list(df):
        df[feature] = df[feature].fillna(0)
    
    unique_values = df['Food Group'].unique()
    food_name_dictionary = {}

    def list_to_dictionary(list, object):
        for (index, value) in enumerate(list):
            object[index] = value
        return object

    food_name_dictionary = list_to_dictionary(unique_values, food_name_dictionary)

    df['Food Group'].replace(unique_values, [i for i in range(23)], inplace=True)

    # Data normalization
    scaler = MinMaxScaler()
    df['Standardize Calories'] = scaler.fit_transform(df[['Calories']])
    df['Standardize Fat (g)'] = scaler.fit_transform(df[['Fat (g)']])
    df['Standardize Protein (g)'] = scaler.fit_transform(df[['Protein (g)']])
    df['Standardize Carbohydrate (g)'] = scaler.fit_transform(df[['Carbohydrate (g)']])
    df['Standardize Sugars (g)'] = scaler.fit_transform(df[['Sugars (g)']])
    df['Standardize Fiber (g)'] = scaler.fit_transform(df[['Fiber (g)']])

    return df

@app.route('/')
def get_food_list():

    df = pd.read_csv("../MyFoodData-Nutrition-Facts-SpreadSheet-Release-1-4.csv")

    # now we are comparing our feature vector to matrix
    df = clean_data(df)
    df = process_data(df)

    food_dict = {}
    
    for (index, value) in enumerate(df['name'].tolist()):
            food_dict[index] = value

    return food_dict


@app.route('/get-recommendation', methods = ["GET"])
def recommendar(row_number=9000,data=None,n=5):

    df = pd.read_csv("../MyFoodData-Nutrition-Facts-SpreadSheet-Release-1-4.csv")

    # now we are comparing our feature vector to matrix
    df = clean_data(df)
    df = process_data(df)

    if row_number:
        df['similarity'] = cosine_similarity([np.array(df.iloc[row_number, 9:14])],Y=df.iloc[:,9:14]).reshape(-1,1)
    if data:
        df['similarity'] = cosine_similarity(X=data,Y=df.iloc[:,:-1]).reshape(-1,1)
    
    # top 5 similar property
    indices2 = df['similarity'].nlargest(n+1).index

    json_data = df.iloc[indices2.values].to_json(orient="records")

    return json_data



if __name__ == "__main__":
    app.run(debug=True)
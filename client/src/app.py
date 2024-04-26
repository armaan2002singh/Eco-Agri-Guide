from flask import Flask,request,render_template,jsonify
import numpy as np
import pandas as pd
import pickle
from flask_cors import CORS

# Importing Model
model = pickle.load(open('C:\\Users\\Armann\\Desktop\\major_project\\client\\src\\DecisionTree.pkl', 'rb'))  # Update the file path

# Creating flask app
app = Flask(__name__)
CORS(app,origins={"http://localhost:3000","http://localhost:3000"})
@app.route('/')
def index():
    return render_template("Prediction.js") 

@app.route("/predict", methods=['POST'])
def predict():
    # feature_names = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall']
    if request.method == 'POST':
        try:
            data=request.json
            N = int(data['nitrogen'])
            P = int(data['phosphorus'])
            K = int(data['potassium'])
            temperature = float(data['temperature'])
            humidity = float(data['humidity'])
            ph = float(data['ph'])
            rainfall = float(data['rainfall'])
            feature_list = [N, P, K, temperature, humidity, ph, rainfall]
            single_pred = np.array(feature_list).reshape(1, -1)
            
            prediction = model.predict(single_pred)
            
            print(prediction[0])
            # crop_dict = {
            #     1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange", 8: "Apple",
            #     9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana", 14: "Pomegranate",
            #     15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans", 19: "Pigeonpeas", 20: "Kidneybeans",
            #     21: "Chickpea", 22: "Coffee"
            # }
            crop_list = ['rice', 'maize', 'jute', 'cotton', 'coconut',  'papaya', 'orange', 'apple',
                'muskmelon', 'watermelon'  , 'grapes' , 'mango' , 'banana' , 'pomegranate' ,
                'lentil' , 'blackgram' , 'mungbean' , 'mothbeans' , 'pigeonpeas' , 'kidneybeans' ,
                'chickpea', 'coffee']
            
            # print(type(prediction[0]))
            
            # print(crop_dict)
            if prediction[0] in crop_list:
                crop = prediction[0]
                result = "{} is the best crop to be cultivated right there".format(crop)  
                return jsonify({'result': result})  
                # print(result)
            else:
                result = "Sorry, we could not determine the best crop to be cultivated with the provided data"
                return jsonify({'result': result})
        
        

        except ValueError as e:
            error_message = f"Invalid input: {str(e)}"
            return jsonify({'error': error_message}), 400
        

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)


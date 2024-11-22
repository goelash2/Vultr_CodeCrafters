from flask import Flask, request, jsonify
import joblib 
import numpy as np

# Load the trained model (ensure it's saved properly)
model = joblib.load('RandomForest_Model.pkl')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the request
    data = request.get_json()
    input_data = np.array(data['input']).reshape(1, -1)  # Adjust according to your model's input shape
    
    # Make a prediction
    prediction = model.predict(input_data)
    
    # Return the prediction as JSON
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
    
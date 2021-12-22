from typing import final
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import os
# from sklearn.cluster import KMeans

model = pickle.load(open('flask-server/model.pkl', 'rb'))

# template_dir = os.path.abspath('/static/dist')

# print(template_dir)
app = Flask(__name__,static_folder='', static_url_path='')

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/predict',methods=['GET','POST'])
def predict():
    data = request.get_json(force=True)

    # if data == None:
    #     return jsonify({'value': 4})
    try:
        data = [np.array(data)]
        prediction = model.predict(data)
        print(prediction)
    except NameError:
        print("hai")

    result = int(prediction[0])

    return jsonify({'value': result})
# #     output = round(prediction[0], 2)

# #     return render_template('index.html', prediction_text='Sales should be $ {}'.format(output))

# # @app.route('/results',methods=['POST'])
# # def results():

# #     data = request.get_json(force=True)
# #     prediction = model.predict([np.array(list(data.values()))])

# #     output = prediction[0]
# #     return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)


#================================================================
# @app.route('/predict', methods=['GET','POST'])
# def predict():
    
#     if request.method == "POST":
#         #get form data
#         data = request.json;

#         # print(data);
        
#         #call preprocessDataAndPredict and pass inputs
#         try:
#             prediction = cluster(data)
#             #pass prediction to template
#             return prediction
   
#         except ValueError:
#             return "Please Enter valid values"
  
#         pass
#     pass
# def cluster(data):
    
#     #keep all inputs in array
#     input = np.array(data)

    
#     #reshape array
#     input = input.reshape(1,-1)
#     print('hehehe')
#     print(input)
    
#     #predict
#     prediction = model.predict(input)
    
#     return prediction
    
#     pass
# if __name__ == '__main__':
#     app.run(debug=True)
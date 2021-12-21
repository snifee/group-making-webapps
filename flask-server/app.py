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
    data = request.json

    data = (data)
    # pass

    # int_features = [int(x) for x in data]    
    final_features = [data]
    # try:
        
    #     prediction = model.predict(final_features)
    #     print(model)
    # except NameError:
    #     print(NameError)

    print(data)

    return jsonify({'value': [[4]]})
#     output = round(prediction[0], 2)

#     return render_template('index.html', prediction_text='Sales should be $ {}'.format(output))

# @app.route('/results',methods=['POST'])
# def results():

#     data = request.get_json(force=True)
#     prediction = model.predict([np.array(list(data.values()))])

#     output = prediction[0]
#     return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)
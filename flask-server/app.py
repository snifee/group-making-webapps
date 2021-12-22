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

if __name__ == "__main__":
    app.run(debug=True)

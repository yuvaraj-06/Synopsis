from flask import Flask, render_template, Response
from camera import VideoCamera
import json
from collections import Counter
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import json 
import numpy as np 
import tensorflow as tf
from tensorflow import keras 
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

with open('interview1.json') as file:
    data = json.load(file)

from sklearn.preprocessing import LabelEncoder

training_sentences = []
training_labels = []
labels = []
responses = []


for intent in data['intents']:
    for pattern in intent['patterns']:
        training_sentences.append(pattern)
        training_labels.append(intent['tag'])
    responses.append(intent['responses'])
    
    if intent['tag'] not in labels:
        labels.append(intent['tag'])


enc = LabelEncoder()
enc.fit(training_labels)
training_labels = enc.transform(training_labels)


vocab_size = 10000
embedding_dim = 16
max_len = 20
trunc_type = 'post'
oov_token = "<OOV>"
tokenizer = Tokenizer(num_words=vocab_size, oov_token=oov_token) # adding out of vocabulary token
tokenizer.fit_on_texts(training_sentences)
word_index = tokenizer.word_index
sequences = tokenizer.texts_to_sequences(training_sentences)
padded = pad_sequences(sequences, truncating=trunc_type, maxlen=max_len)


classes = len(labels)


model = tf.keras.models.Sequential()
model.add(keras.layers.Embedding(vocab_size, embedding_dim, input_length=max_len))
model.add(keras.layers.GlobalAveragePooling1D())
model.add(keras.layers.Dense(16, activation='relu'))
model.add(keras.layers.Dense(16, activation='relu'))
model.add(keras.layers.Dense(classes, activation='softmax'))
training_labels_final = np.array(training_labels)
EPOCHS = 500
model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
history = model.fit(padded, training_labels_final, epochs=EPOCHS)
 
app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    return render_template('index.js')
    
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
               
@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/res')
def res():
    with open('sav.json') as json_file:
            data = json.load(json_file)
            data["emo"]=dict(Counter(data["emo"]))
            return data
@app.route("/<inp>", methods = ["GET"])
@cross_origin()
def output(inp):
    string = inp
    result = model.predict(pad_sequences(tokenizer.texts_to_sequences([string]),
                                                    truncating=trunc_type, maxlen=max_len))
    category = enc.inverse_transform([np.argmax(result)])
    for i in data['intents']:
        if i['tag']==category:
            return np.random.choice(i['responses'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=False)

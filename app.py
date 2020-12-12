from flask import Flask, render_template, request, jsonify
from helpers.image_preprocessing import decode_image, reshape_image, prepare_image_for_evaluation
from helpers.tensorflow_model import TensorflowModel


app = Flask(__name__)
model = TensorflowModel('./model/MNIST_digits_CNN_model.h5')


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        image_url = request.values['imgBase64']

        decoded_image = decode_image(image_url)
        reshaped_image = reshape_image(decoded_image)
        prepared_image = prepare_image_for_evaluation(reshaped_image)

        prediction = model.predict(prepared_image)

        return jsonify(prediction=str(prediction))

    return render_template('index.html')


if __name__ == '__main__':
    app.run()
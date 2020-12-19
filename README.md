# Web-MNIST
A digit recognizer web app made using flask and tensorflow.keras.

![preview](./static/preview.png)

### Architecture used

The model for prediction was built with tensorflow.keras.
The neural network was trained on the [MNIST database of handwritten digits](http://yann.lecun.com/exdb/mnist/)
with the following architecture:
```
model = keras.Sequential(
    [
        keras.layers.Conv2D(filters=32, kernel_size=5, padding="same", activation="relu", input_shape=(28, 28, 1)),
        keras.layers.BatchNormalization(),
        keras.layers.Conv2D(filters=32, kernel_size=5, strides=2, padding="same", activation="relu"),
        keras.layers.BatchNormalization(),
        
        keras.layers.Conv2D(filters=64, kernel_size=5, padding="same", activation="relu"),
        keras.layers.BatchNormalization(),
        keras.layers.Conv2D(filters=64, kernel_size=5, strides=2, padding="same", activation="relu"),
        keras.layers.BatchNormalization(),
        
        keras.layers.Flatten(),
        keras.layers.Dense(256, activation='relu'),
        keras.layers.Dense(10, activation='softmax'),
    ]
)
```
The model was compiled with these parameters:

```
model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
```
and data augmentation was used:

```
datagen = ImageDataGenerator(rotation_range=10,
                             width_shift_range=0.1,
                             shear_range=0.2,
                             height_shift_range=0.1,
                             zoom_range=0.1,
                             horizontal_flip=False,
                             vertical_flip=False)
```

The full notebook where the model was tested can be found [here](https://github.com/lorenzophys/deep-learning-playground/blob/main/MNIST_handwritten_digits/MNIST_digit_CNN_data_augmentation.ipynb).
### Built with

* [Flask](https://flask.palletsprojects.com/)  
* [Bootstrap](https://getbootstrap.com/)   
* [jQuery](https://jquery.com/)  
* [Tensorflow](https://www.tensorflow.org/)

## Usage

1. Clone the repo
```console
$ git clone https://github.com/lorenzophys/web-MNIST.git
```

2. Install the packages
```console
$ cd web-MNIST
$ pipenv install
```

3. Open the virtual environment shell and set the FLASK_APP variable
```console
$ pipenv shell
$ set FLASK_APP=app
```

4. Run the app
```console
$ flask run
```

## Thanks
![preview](./static/favicon.ico)  
Icons made by [Freepik](http://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/)

## License
This project is licensed under the **MIT License** - see the LICENSE.md file for details

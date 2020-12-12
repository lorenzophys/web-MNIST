import numpy as np
from PIL import Image
from io import BytesIO
from base64 import b64decode


class ImagePreprocessor:

    @staticmethod
    def decode_image(image_url):
        _, encoded = image_url.split(',')
        image_bytes = BytesIO(b64decode(encoded))

        return image_bytes

    @staticmethod
    def reshape_image(image_bytes):
        image = Image.open(image_bytes)

        return image.resize((28, 28), Image.LANCZOS)

    @staticmethod
    def prepare_image_for_evaluation(image):
        image_array = np.array(image)[:, :, 3] / 255.

        return image_array.reshape(-1, 28, 28, 1)
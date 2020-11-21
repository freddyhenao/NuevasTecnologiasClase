# esto es necesario app es el nombre de la aplicacion y  el parametro del objeto  que me permite usar
# todos los atributos y metodos de Flask,  con esto se obtiene los parametros para el constructor.

from flask import Flask
app = Flask(__name__)


# esta es sintaxis de flask
# ruta dende esta la aplicacion
# esto es lo basioco para mostrar una paguina


@app.route("/")
def index(): 
    return"Hello word"

@app.route("/singin")
def singin():
    return "Sinnin"


# par aque se ejecute flask en el servidor se necesita este comendo
if __name__ == "__main__":
    app.run(debug=True)

# from flask_cors import CORS, cross_origin permite configurar los permisos de los llamados a la base de datos 
# para evitar los bloqueos de seguridad 
from flask import Flask, render_template, request, redirect, url_for, json
import mysql.connector
from flask_cors import CORS, cross_origin   
from flask.json import jsonify



mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    database = "taskapp"
)
# permite el acceso de los datos a la base de datos 
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = ['Content-Type']
# convierte los datos obtenidos en formato Json
def toJson(data):
    tasks = []
    for i in data:
        task = {'id':i[0],'task':i[1],'date':i[2]}
        tasks.append(task)
    return tasks
# consulta por metodo GET "oculto no lo pude ver el usuario " y se adjunta la solisitud de ingreso del metodo @cros
@app.route('/listtasks', methods=['GET'])
@cross_origin()
def index():
    sql = "SELECT * FROM tasks"
    cur = mydb.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    print(result)
    return json.dumps({"data": toJson(result)})

#  consulta por metodo POST "lo pude ver el usuario " y se adjunta la solisitud de ingreso del metodo @cros
@app.route('/listtasks', methods=['POST'])
@cross_origin()
def createTask():
    data = request.get_json(force=True)
    sql =f"SELECT INTO tasks (task, date) VALUES ('{data['task']}','{data['date']}')"
    cur = mydb.cursor()
    cur.execute(sql)
    mydb.commit()
    response = jsonify({'response': 'ok'})
    return response

#  con esta instruccion se conecta a la direccion ip de la maquina y al puerto en este caso port = 4000
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
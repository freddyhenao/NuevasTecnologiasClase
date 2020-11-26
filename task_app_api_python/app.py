# from flask_cors import CORS, cross_origin permite configurar los permisos de los llamados a la base de datos 
# para evitar los bloqueos de seguridad 
from flask import Flask, render_template, request, redirect, url_for, json
import mysql.connector
from flask_cors import CORS, cross_origin   



mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    database = "taskapp"
)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = ['Content-Type']

def toJson(data):
    tasks = []
    for i in data:
        task = {'id':i[0],'task':i[1],'date':i[2]}
        tasks.append(task)
    return tasks

@app.route('/listtasks', methods=['GET'])
@cross_origin()
def index():
    sql = "SELECT * FROM tasks"
    cur = mydb.cursor()
    cur.execute(sql)
    result = cur.fetchall()
    print(result)
    return json.dumps({"data": toJson(result)})
    
if __name__ == "__main__":
    app.run(debug=True)
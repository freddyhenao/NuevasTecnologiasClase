from flask import Flask, request, json, jsonify
import mysql.connector
from flask_cors import CORS, cross_origin

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="taskapp"
)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS']= ['Content-Type']

def toJson(data):
    tasks = []
    for i in data:
        task = {'id':i[0], 'task':i[1], 'date':i[2]}
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

@app.route('/createTask', methods=['POST'])
@cross_origin()
def createTask():
    data = request.get_json(force=True)
    print(data)
    sql = f"INSERT INTO tasks (task, date) VALUES ('{data['task']}', '{data['date']}')"
    cur = mydb.cursor()
    cur.execute(sql)
    mydb.commit()
    response = jsonify({'response': "ok"})
    
    return response



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
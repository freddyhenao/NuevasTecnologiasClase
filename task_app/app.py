# esto es necesario app es el nombre de la aplicacion y  el parametro del objeto  que me permite usar
# todos los atributos y metodos de Flask,  con esto se obtiene los parametros para el constructor.
# para conectar la aplicacion a la base de datos sql es necesario isntalar una extension 
# la recomdada , se puede consultar en navegador python mysql, url https://www.w3schools.com/python/python_mysql_getstarted.asp 
# instalar la extension nesesaria   comando :  pip install mysql-connector-python  

from flask import Flask, render_template, url_for, request, redirect
import mysql.connector

mydb=mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database = "taskapp"
)
app = Flask(__name__)


# esta es sintaxis de flask
# ruta dende esta la aplicacion
# esto es lo basioco para mostrar una paguina


@app.route("/")
def index(): 
# traen los datos de la base de datos 
    sql = "SELECT * FROM tasks"
    cur = mydb.cursor()             # habilita la conexion con base de datos necesario
    cur.execute(sql)                # habilita la conexion con base de datos necesario
    result= cur.fetchall()          # camando para recibir en una variable los datos solicitados se cargan en result 
    return render_template('index.html', tasks=result)


@app.route("/create")
def create():
    return render_template('create-task.html')

@app.route("/addTask", methods=['POST'])
def addTask():
    if request.method == 'POST':
        taskName = request.form['task']
        taskDate = request.form['date']
        if taskName == "" or taskDate == "":
            return " Todos los campos deben llenarse"
        if len(taskName) < 5:
            return " El Task name debe ser mayor de 5 caracteres "
        taskDate = request.form['date']
        sql=f"INSERT INTO tasks (task, date) VALUES ('{taskName}', '{taskDate}')"     # COMADO query para cargar datos para envio 
        cur = mydb.cursor()                                                     # habilita la conexion con base de datos necesario 
        cur.execute(sql)                                                        #  habilita la conexion con base de datos necesario  
        mydb.commit()                                                           # este confirma los cambios en base de datos 
        return redirect(url_for("index"))                                     # return f"method post - task: {taskName} date: {taskDate}"   # muestra lo  que se carga  

@app.route("/delete", methods=['GET'] )
def delete():
    id = request.args.get("id")
    sql=f"DELETE FROM tasks WHERE id={id};"                                   # COMADO query para cargar datos para envio 
    cur = mydb.cursor()                                                     # habilita la conexion con base de datos necesario 
    cur.execute(sql)                                                        #  habilita la conexion con base de datos necesario  
    mydb.commit() 
    return redirect(url_for('index'))

@app.route("/edit", methods=['GET'] )
def edit():
    id = request.args.get("id")
    sql = f"SELECT * FROM tasks WHERE id={id}"                                             # COMADO query para cargar datos para envio 
    cur = mydb.cursor()                                                     # habilita la conexion con base de datos necesario 
    cur.execute(sql)                                                        #  habilita la conexion con base de datos necesario  
    result= cur.fetchall()                                                  # camando para recibir en una variable los datos solicitados se cargan en result 
    print(result)
    return  render_template('edit-task.html', task=result[0])


@app.route("/update", methods=['POST'] )
def update():
    if request.method == 'POST':
        taskName = request.form['task']
        taskDate = request.form['date']
        id = request.args.get("id")
        sql =f"UPDATE tasks SET task='{taskName}', date='{taskDate}' WHERE id={id} "
        cur = mydb.cursor()                                                     # habilita la conexion con base de datos necesario 
        cur.execute(sql)                                                        #  habilita la conexion con base de datos necesario  
        mydb.commit()                                                           # con firmar los cambios 
        return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
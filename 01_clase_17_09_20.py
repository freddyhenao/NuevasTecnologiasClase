myArray = ['juan', 5, 'pedro',True, False]
# opciones de impresion o recorrer un arreglo si un ciclo
print(myArray)
print(myArray[2])
print(myArray[0:2])
print(myArray[2:])
# llevar datos a un arreglo 
myArray[2]= "jose"
print(myArray)
# recorrer un arreglo con un ciclo desde 0 a 5
#   comando    
 #   for i in range(5)

# recorrer un arreglo con un ciclo desde 2 a 5
#   comando    
#    for i in range(2,5)

# recorrer un arreglo obteniendo el tamaño del arreglo
# len(array)  obtiene el tamaño del arreglo
#   comando 
for i in range(len(myArray)):
    print(myArray[i])
for i in myArray:
    print(i)   

# i devuelve cada posicion del areglo 
# check if item exist in array, "busca si un item esta en el arreglo array"
#   comando


# check if item exist in array, "busca si un item esta en el arreglo array"
# forma larga 
for i in range(len(myArray)):
    if myArray[i]=="pedro":
        print("Pedro Existe")
# otra forma 
for i in myArray:
    if i =="pedro":
        print("Pedro Existe")

 # add elements to array , " agregar elementos a mu arreglo myArray"
myArray.append(10)
print(myArray)
# insert element at specific position
myArray.insert(1,"Bellanita")
print(myArray)
# remove element 
myArray.remove('juan')
print(myArray)

#working with the string
a= "hola amigos "
print(1)
print(a[1:3])
if 'ami' in a:
    print("existe")
name="juan"
age="26"
# forma 1
template1="El nombre es:"+name+"y tiene una edad de:" + age
# forma 2 es muy usada esta sentencia 
template2=f"El nombre es:{name} y tiene una edad de:{age} "
print(template1) 
print(template2)

#tuplas inmutables quiere decir que nose puede midificar solo se pueden consultar los datos 
myTuple=("nombre","Apellido","ciudad")
print(myTuple[i])
for i in myTuple:
    print(i)

#dictionary con esto se realiza las peticiones a las api y base de datos 
myDictionary={
    'palabra': 'cualquier cosa',
    'nombre': 'Laura',
    'apellido':'lopez',
    'City':'Medellin'
}
apellido= myDictionary['apellido']
print(apellido)
nombre= myDictionary['nombre']
print(nombre)
print(nombre)
print(nombre, apellido)

# cambiar dato em diccionario
apellido= myDictionary['apellido']
nombre= myDictionary['nombre']
myDictionary['nombre']="Maria Elena"
print(myDictionary)

print(nombre, apellido)

# ejercise
# se le pide el nombre y apellido de 3 usuarios se deben guardar en un arreglo 
# despues se deben consulta u obtener

numberUser = 2
arrayPeople = []
for i in range (numberUser):
    name = input("ingrese nombre: ")
    lastname = input("ingrese apellido: ")
    age = int(input("ingrese edad: "))
    person = {
        'nombre': name,
        'apellido': lastname,
        'edad': age
    }
    arrayPeople.append(person)
# entrega los elementos del arreglo
for i in arrayPeople:
    print (i)
# consultar un item de cada uno de los datos del arreglo
for i in arrayPeople:
    print (i)
# arrayPeople[0]['nombre']="Rosa"
# print(arrayPeople[0]['nombre'])



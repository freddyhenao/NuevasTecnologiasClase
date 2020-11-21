class Coche:
# _plate poner el guin bajo antes del atributo hace que este sea privado osea solo para esta claseç
# 
    _plate = ""
    _color = ""
    _brand = ""
    _model = 0

#definir funiones con def
# metodo de la clase Coche 
# utiliza un espacion de memoria para cada objeto
# todas las clase deben llevar los setVariable "Guardar"y getVariable esto para "Cosultar o traer "

    def setPlate(self, placa):
        if len(placa)<7:
            self._plate = placa
        else:
            print("Error")

    def getPlate(self):
        return self._plate

    def setColor(self, Color):       
            self._color = Color

    def getColor(self):
        return self._color        
  
    def arrancar(self):
        print("Arrancando")

    def frenar(self):
        print("Frenando")

# camion = Coche()
# camion.setPlate("ABC123")
# print(camion.getPlate())

# bus = Coche()
# bus.setPlate("FYT256")
# print(bus.getPlate())

# parte 3


class Person:
        _age = 0
        _name = ""
        _rol  = ""
        _adress = ""
        _identification = 0
   
 # este es el paramatro construtor osea es el primero que se ejecuta
        def __init__(self, rol):
            self._rol= rol

        def setAge(self, age):
                self._age= age        
        def getAge(self):
            return self._age

        def setName(self, name):
                self._name= name      
        def getName(self):
            return self._name

        def setRol(self, rol):
                self._rol= rol        
        def getRol(self):
            return self._rol

        def setAdress(self, adress):
                self._adress= adress       
        def getAdress(self):
            return self._adress

        def setIdentification(self, identification):
                self._identification= identification
        def getIdentification(self):
            return self._identification

        def getUserInfo(self):
            return f"Nombre: {self._name } - Edad:{self._age} - Rol:{self._rol} - Documento:{self._identification} - Direccion:{self._adress}"
    
admin = Person("Admin")  
admin.setRol("Admin")
admin.setName("Jose Mateo")
admin.setAdress("Calle del medio")
admin.setIdentification(1234567)
admin.setAge(27)

client = Person("client")  
client.setRol("client")
client.setName("Juan")
client.setAdress("Calle del medio")
client.setIdentification(98765421)
client.setAge(45) 


print(admin.getRol())
print(client.getRol())
print(admin.getUserInfo())
print(client.getUserInfo())






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
    
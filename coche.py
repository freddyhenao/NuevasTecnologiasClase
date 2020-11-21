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
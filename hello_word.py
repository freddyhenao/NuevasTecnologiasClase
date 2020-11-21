# print("hello world")
# this is a comment
# number1 = int(input("Ingrese numero 1: "))
# number2 = int(input("Ingrese numero 2: "))
# number3 = int(input("Ingrese numero 3: "))

# if number1 == number2 and number1 == number3:
#     print("empate")
# elif number1 == number2 and number1 > number3:
#     print("numero uno y numero dos son mayores")
# elif number2 == number3 and number2 > number1:
#     print("Numero dos y numero 3 son mayores")
# elif number3 == number1 and number3 > number2:
#     print("Numero 3 y numero 1 mayores")
# elif number1 > number2 and number1 > number3:
#     print("numero 1 es mayor") 
# elif number2 > number1 and number2 > number3:
#     print("Numero 2 es mayor")
# else:
#     print("Numero 3 es mayor")

# print("Finaliza")

# For structure
# for(let i = 0; i<5; i++)

# suma = 0
# for i in range(5):
#     suma = suma + int(input("Ingrese numero"))

# print(suma)
|
# while structure
# num1 - 1 - 5
#num2 - 5-9
suma = 0
num1 = 0
num2 = 0
while True:
    
    while True:
        num1 = int(input("ingrese nuemro entre 1-5"))
        if num1 >= 1 and num1 <= 5:
            break
        else:
            print("Numero incorrecto, debe estar entre 1 - 5")
    while True:
        num2 = int(input("ingrese nuemro entre 6-10"))
        if num2 >= 6 and num2 <= 10:
            break
        else:
            print("Numero incorrecto, debe estar entre 6 - 10")

    suma = suma + num1 + num2
    stop = input('Desea continuar - s (si) otra letra no')
    if stop != "s" and stop != "S":
        break
    
print(suma)
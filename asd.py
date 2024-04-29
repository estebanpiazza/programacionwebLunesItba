continuar= True
docenas= 0
goles_primer= 0
goles_segundo= 0
cantidad_gol= 0
goles_cabeza= 0
gol_tardio= 0

while continuar == True:
 
    ingreso= str(input("Desea ingresar un gol (SI/NO): "))
    
    while ingreso == 'SI':
        apellido= str(input("Ingrese apellido: "))
 
        i=0
        caracter1= 65
        caracter2= 97
        letra= 0
        cont_car= 0
        espacios= 0
  
        while apellido[i] != chr(caracter1) or apellido != chr(caracter2):
              if (apellido[i] == chr(caracter1) or apellido[i] == chr(caracter2) and apellido[i] == ' '):
                   letra+=1
                   if apellido[i] == chr(caracter1) or apellido[i] == chr(caracter2):
                        cont_car+=1
                   elif apellido[i] == ' ':
                        espacios+=1
              while i < len(apellido):
                   i+=1
              if i == len(apellido):
                   i= 0
                   caracter1+=1
                   caracter2+=1
              if caracter1 >= 90:
                   caracter1= 65
              elif caracter2 >= 122:
                   caracater2= 97
            
              if letra < 1 or cont_car > 30 or len(apellido) == espacios:
                    print("ERROR DEBE INGRESARLO NUEVAMENTE")
                    apellido= str(input("Ingrese apellido: "))
 
 
                    
        gol=str(input("Ingrese descripcion(D/I/C/O): "))    
 
        while gol != 'D' and gol != 'I' and gol != 'C' and gol != 'O':
             print("ERROR DEBE INGRESARLO NUEVAMENTE")
             gol=str(input("Ingrese descripcion(D/I/C/O): "))  
        cantidad_gol+=1
    minuto_segundo= str(input("Ingrese minuto y segundo del gol(mm:ss)"))
 
       while (len (minuto_segundo) > 5) and (int(minuto_segundo[0:2]) < 0 or int(minuto_segundo[0:2]) > 99) and minuto_segundo[2] != ':' and (int(minuto_segundo[3:5]) < 0 or int(minuto_segundo[3:5]) > 59):
            minuto_segundo= str(input("Ingrese minuto y segundo del gol(mm:ss): "))
 
 
       if int(minuto_segundo[0:2]) <= 45:
            goles_primer+=1
       elif int(minuto_segundo[0:2]) > 45:
            goles_seguundo+=1
 
 

       if gol == 'D':
            calculo= cantidad_gol / 12 
            docenas+=calculo
 
       if gol == 'C' and int(minuto_segundo[0:2]) >= 90:
             goles_cabeza+=1 
 
       if int(minuto_segundo[0:2]) > int(gol_tardio):
             gol_nombre= apellido
       
       if ingreso == 'SI':
             ingreso= False
 
   if ingreso == 'NO':
       continuar= False
 
porcentaje1= (goles_primer/cantidad_gol)*100
porcentaje2= (goles_segundo/cantidad_gol)*100
print("Cantidad de goles hechos en primer tiempo ", porcentaje1,"%")
print("Cantidad de goles hechos en segundo tiempo ", porcentaje2,"%")
print("Docenas de goles hechos con la pierna derecha: ", docenas)
print("Cantidad de goles de cabeza en tiempo de descuento: ", goles_cabeza)
print("Apellido del autor del gol mas tardio: ", gol_nombre)
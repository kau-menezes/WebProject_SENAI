with open("teste.txt", "a") as arquivo:
    linha1 = input("Digite:\n\nR: ")
    arquivo.write(linha1)
    linha2 = input("Digite:\n\nR: ")
    arquivo.write(f"\n{linha2}")
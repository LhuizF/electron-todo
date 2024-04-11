import os

def create_file():
    file_name = "file.txt"
    folder = "temp"
    try:
      if not os.path.exists(folder):
          os.makedirs(folder)

      file_path = os.path.join(folder, file_name)

      with open(file_path, 'w') as file:
          file.write("Arquivo criadoooooooooo!!!")
      print(f"Arquivo '{file_name}' criado com sucesso.")
    except Exception as e:
        print(f"Ocorreu um erro ao criar o arquivo: {e}")


create_file()

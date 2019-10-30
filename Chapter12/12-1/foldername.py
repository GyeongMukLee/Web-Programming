import os


def newFolderName(oldFolderName: str) -> str:
    oldFolderNumber = oldFolderName.split("-")[1]
    return "12-1-"+oldFolderNumber


path = "D:/Code/Web-Programming/Chapter12/12-1/"

for folder in os.listdir(path):
    if os.path.isdir(path+folder):
        os.rename(path+folder, newFolderName(folder))
        print("폴더의 이름을", path+folder, "에서", path +
              newFolderName(folder), "로 변경했습니다.")

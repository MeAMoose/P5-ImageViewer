from time import time
import os
import json
dataToExport = []
try:
    with open("images.json") as json_file:
        data = (json.load(json_file))
except FileNotFoundError:
    print("Error: Image JSON not found.")
assetFileData = os.listdir("Assets")
for i in range(0,len(assetFileData)-1):
    if(assetFileData[i] in data.values()):
        print("True")
    else:
        dataToExport.append(assetFileData[i])
        print("False")
print(dataToExport)
for j in range(0, len(dataToExport)):
    print(f"{len(data.values())+j}")
    print(dataToExport[j])
    data[f"{len(data.values())+1}"] = dataToExport[j]
dataToExport = data
with open("images.json", "w") as outFile:
    json.dump(dataToExport, outFile, indent=4)
outFile.close()
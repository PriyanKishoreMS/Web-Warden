from flask import Flask, request
from nudenet import NudeClassifier
import uuid
import os
import urllib
import base64
import requests

classifier = NudeClassifier()


def b64(message):
    message_bytes = message.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode('ascii')
    base64_message=base64_message.replace("/","_")
    return base64_message



def findit(jsonDat):
    urls=jsonDat["urls"]
    result=""
    dir="/tmp/"+str(uuid.uuid4())+"/"
    os.mkdir(dir)
    for url in urls:
        response = requests.get(url)
        file = open(dir+b64(url), "wb")
        file.write(response.content)
        file.close()
    files=os.listdir(dir)
    filelist=[]
    for file in files:
        f=dir+file
        filelist.append(f)
    result=classifier.classify(filelist)
    return result

app=Flask(__name__)

@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "content-type"
    return response

@app.route('/',methods=['POST'])
def result():
    content_type=request.headers.get('Content-Type')
    if(content_type=='application/json'):
        jsonDat=request.json
        return findit(jsonDat)
    else:
        return 'Content-Type not Supported!'

app.run(host='0.0.0.0',port='80')

from flask import Flask, request
import json
from routes import petRoutes

data = []
app = Flask(__name__)

@app.route("/pet", methods=["GET"])
def pet():
  if request.method == "GET":
    return petRoutes.get_match_pet(data)

if __name__ == "__main__":
  f = open("./database/data.json")
  data = json.load(f)

  print("Server listen")
  app.run(debug=True)
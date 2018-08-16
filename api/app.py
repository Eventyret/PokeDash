import os
from flask import Flask, jsonify, request, redirect
from flask_pymongo import PyMongo
from flask_cors import CORS

DeveloperMode = True
SECRET_URI = os.getenv("SECRET_URI")

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "heroku_gtwrqfln"
if DeveloperMode:
    app.config["MONGO_URI"] = "mongodb://api_dev_user:6L4Ltv7yFuKwguA@ds161751.mlab.com:61751/heroku_gtwrqfln"
else:
    app.config["MONGO_URI"] = SECRET_URI
CORS(app)
mongo = PyMongo(app)


@app.route("/")
def lets_redirect():
    return redirect("/api", code=302)


@app.route("/api", methods=["GET"])
def get_all_pokemons():
    if DeveloperMode:
        pokemons = mongo.db.pokemons_dev
    else:
        pokemons = mongo.db.pokemons
    output = []
    for q in pokemons.find():
        if DeveloperMode:
            output.append({"PokedexID": q["PokeID"], "Name": q["Name"], "Type1": q["Type1"], "Type2": q["Type2"],
                           "Type2": q["Type2"], "Total": q["Total"], "HP": q["HP"],
                           "Attack": q["Attack"], "Defense": q["Defense"], "Sp": q["Sp"], "Speed": q["Speed"],
                           "Generation": q["Generation"], "Legendary": q["Legendary"], "Battle": q["Battle"],
                           "Sprite": q["Sprite"], "DeveloperMode": q["DeveloperMode"]})
        else:
            output.append({"PokedexID": q["PokeID"], "Name": q["Name"], "Type1": q["Type1"], "Type2": q["Type2"],
                           "Type2": q["Type2"], "Total": q["Total"], "HP": q["HP"],
                           "Attack": q["Attack"], "Defense": q["Defense"], "Sp": q["Sp"], "Speed": q["Speed"],
                           "Generation": q["Generation"], "Legendary": q["Legendary"], "Battle": q["Battle"],
                           "Sprite": q["Sprite"]})

    return jsonify({"results": output})


@app.errorhandler(404)
def page_not_found(e):
    return redirect("/api")


if __name__ == "__main__":
    app.run(debug=DeveloperMode)
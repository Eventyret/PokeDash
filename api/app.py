import os
from flask import Flask, jsonify, request, redirect
from flask_pymongo import PyMongo
from flask_cors import CORS


DeveloperMode = os.getenv("Development", False)
Docker = os.getenv("docker")
SECRET_URI = os.getenv("SECRET_URI")

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "heroku_gtwrqfln"
if not DeveloperMode:
    app.config["MONGO_URI"] = SECRET_URI
else:
    app.config["MONGO_URI"] = "mongodb://api_dev_user:6L4Ltv7yFuKwguA@ds161751.mlab.com:61751/heroku_gtwrqfln"
CORS(app)
mongo = PyMongo(app)


@app.route("/")
def lets_redirect():
    return redirect("/api", code=302)


@app.route("/api", methods=["GET"])
def get_all_pokemons():
    if not DeveloperMode:
        pokemons = mongo.db.pokemons
    else:
        pokemons = mongo.db.pokemons_dev

    # a dict mapping from output key to the key in a mongo pokemon document:
    record_keys = {
        "PokedexID": "PokeID", "Name": "Name", "Type1": "Type1",
        "Type2": "Type2", "Type2": "Type2", "Total": "Total",
        "HP": "HP", "Attack": "Attack", "Defense": "Defense",
        "Sp": "Sp", "Speed": "Speed", "Generation": "Generation",
        "Legendary": "Legendary", "Battle": "Battle",
        "Sprite": "Sprite",
    }
    if not DeveloperMode:
        record_keys["DeveloperMode"] = "DeveloperMode"

    output = []
    for q in pokemons.find():
        output.append({output_key: q[mongo_key] for (
            output_key, mongo_key) in record_keys.items()})

    return jsonify({"results": output})


@app.errorhandler(404)
def page_not_found(e):
    return redirect("/api")


if __name__ == "__main__":
    if Docker and not DeveloperMode:
        app.run(debug=True, host="0.0.0.0")
    elif Docker and DeveloperMode:
        app.run(debug=False, host="0.0.0.0")
    elif not DeveloperMode:
        app.run(debug=False)
    else:
        app.run(debug=True)

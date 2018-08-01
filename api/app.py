from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

app.config["MONGO_DBNAME"] = "heroku_gtwrqfln"
app.config["MONGO_URI"] = "mongodb://dbuser:FIIWhpYSO1JV8nX@ds161751.mlab.com:61751/heroku_gtwrqfln"
CORS(app)

mongo = PyMongo(app)


@app.route("/api", methods=["GET"])
def get_all_pokemons():
    pokemons = mongo.db.pokemons
    output = []
    for q in pokemons.find():
        output.append({"PokedexID": q["PokeID"], "Name": q["Name"], "Type1": q["Type1"], "Type2": q["Type2"], "Type2": q["Type2"], "Total": q["Total"], "HP": q["HP"], "Attack": q["Attack"], "Defense": q["Defense"], "Sp": q ["Sp"], "Speed": q["Speed"], "Generation": q["Generation"], "Legendary": q["Legendary"], "Battle": q["Battle"]})

    return jsonify({"results": output})


if __name__ == "__main__":
    app.run(debug=True)

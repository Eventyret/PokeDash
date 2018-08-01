import os
from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from flask_cors import CORS

# load dotenv in the base root
# refers to application_top
APP_ROOT = os.path.join(os.path.dirname(__file__), '.')
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)
SECRET_URI = os.getenv("SECRET_URI")

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "heroku_gtwrqfln"
app.config["MONGO_URI"] = SECRET_URI
CORS(app)

mongo = PyMongo(app)


@app.route("/api", methods=["GET"])
def get_all_pokemons():
    pokemons = mongo.db.pokemons
    output = []
    for q in pokemons.find():
        output.append({"PokedexID": q["PokeID"], "Name": q["Name"], "Type1": q["Type1"], "Type2": q["Type2"], "Type2": q["Type2"], "Total": q["Total"], "HP": q["HP"],
                       "Attack": q["Attack"], "Defense": q["Defense"], "Sp": q["Sp"], "Speed": q["Speed"], "Generation": q["Generation"], "Legendary": q["Legendary"], "Battle": q["Battle"]})

    return jsonify({"results": output})


if __name__ == "__main__":
    app.run(debug=True)

import feedparser
from flask import Flask, request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
from routes import ParseFeed

app = Flask(__name__)
api = Api(app=app)
CORS(app)


@app.route('/')
def home():
    return render_template('index.html')


api.add_resource(ParseFeed, '/parse')

if __name__ == '__main__':
    app.run(debug=True)

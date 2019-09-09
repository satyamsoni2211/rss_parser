import feedparser
from flask import Flask, request
from flask_restful import Resource, Api
from routes import ParseFeed

app = Flask(__name__)
api = Api(app=app)

api.add_resource(ParseFeed, '/parse')

if __name__ == '__main__':
    app.run(debug=True)

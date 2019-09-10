import feedparser
from flask import Flask, request, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
from routes import ParseFeed

# Initializing app and api
app = Flask(__name__)
api = Api(app=app)

# for cross origin acceptance
CORS(app)

# Functional View for base URL
@app.route('/')
def home():
    return render_template('index.html')


# Route for parse
api.add_resource(ParseFeed, '/parse')

if __name__ == '__main__':
    app.run()

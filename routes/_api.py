import feedparser
from flask_restful import Resource
from flask import request
from ._utils import parse_feed, parse_entries


class ParseFeed(Resource):
    def get(self):
        try:
            url = request.args.get('url')
            feeds = feedparser.parse(url)
            feed = parse_feed(feeds['feed'])
            entries = parse_entries(feeds['entries'])
            return dict(feed=feed, entries=entries), 200
        except:
            return {'error': 'Cannot parse URL'}, 401

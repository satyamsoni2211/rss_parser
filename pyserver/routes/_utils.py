def parse_feed(feed):
    '''
    Function to clean feeds data
    @param feed: feed dictionary object
    @returns: feed cleaned object
    '''
    title = feed.get('title')
    link = feed.get('link')
    image = feed['image']['href']
    updated = feed.get('updated')
    liscence = feed.get('rights')
    language = feed.get("language")
    return dict(title=title,
                link=link,
                image=image,
                updated=updated,
                liscence=liscence)


def parse_entries(entries):
    '''
    Function to clean entries data
    @param entries: entries list object
    @returns: entries cleaned object
    '''
    def extract_entry(entry):
        title = entry.get('title')
        summary = entry.get('summary')
        link = entry.get('link')
        published = entry.get('published')
        return dict(title=title,
                    summary=summary,
                    link=link,
                    published=published)
    return list(map(extract_entry, entries))

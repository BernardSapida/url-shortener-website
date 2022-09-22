fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
});
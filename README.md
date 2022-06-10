# superagent-fetch

Use it to display your superagent request likes fetch method. Useful when want to compare with a request copied from browser.

```javascript
const agent = require('superagent');

const fetched = agent
    .get('/status')
    .use(superagentToFetch)
    .toFetch();

console.log(fetched);

// Will display this
/*

fetch("/status", {
    "method": "GET"
});
*/
```
A more commplex example:

```javascript
const agent = require('superagent');

const fetched = agent
    .post('/status')
    .set('Content-Type', 'application/json; charset=utf-8')
    .send({foo: 'bar', exec: true})
    .use(superagentToFetch)
    .toFetch();

console.log(fetched);

// Will display this
/*

fetch("/status", {
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "body": "{\"foo\":\"bar\",\"exec\":true}",
    "method": "POST"
});
*/
```

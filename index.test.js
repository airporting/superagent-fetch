describe('superagent-fetch', () => {
    let agent;
    let superagentToFetch;

    beforeEach(() => {
        agent = require('superagent');
        superagentToFetch = require('./index');
    })

    test('unknown toFetch method', () => {
        expect(agent.toFetch).toBe(undefined)
    })

    describe('will display as fetch', () => {
        test('basic get request', () => {
            expect(agent.get('/status').use(superagentToFetch).toFetch()).toBe(`fetch("/status", {
    "method": "GET"
});`)
        })

        test('basic get request with header', () => {
            expect(agent.get('/status').set('Content-Type', 'application/json; charset=utf-8').use(superagentToFetch).toFetch()).toBe(`fetch("/status", {
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "method": "GET"
});`)
        })

        test('basic post request', () => {
            expect(agent.post('/status').use(superagentToFetch).toFetch()).toBe(`fetch("/status", {
    "method": "POST"
});`)
        })

        test('basic post request with header', () => {
            expect(agent.post('/status').set('Content-Type', 'application/json; charset=utf-8').use(superagentToFetch).toFetch()).toBe(`fetch("/status", {
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "method": "POST"
});`)
        })

        test('basic post request with headers and payload', () => {
            expect(agent.post('/status').set('Content-Type', 'application/json; charset=utf-8').send({foo: 'bar', exec: true}).use(superagentToFetch).toFetch()).toBe(`fetch("/status", {
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "body": "{\"foo\":\"bar\",\"exec\":true}",
    "method": "POST"
});`)
        })
    })
})

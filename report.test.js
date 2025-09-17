const {sortPages} = require('./report')
const {test, expect} = require('@jest/globals')

test("sortPages", () => {
    const input = {
        "https://blog.boot.dev/path": 3,
        "https://blog.boot.dev/other-path": 2,
        "https://blog.boot.dev/": 1
    }
    const actual = sortPages(input)
    const expected = [
        ["https://blog.boot.dev/path", 3],
        ["https://blog.boot.dev/other-path", 2],
        ["https://blog.boot.dev/", 1]
    ]
    expect(actual).toEqual(expected)
})
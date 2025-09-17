const {normalizeURL, getURLsFromHTML} =  require("./crawl.js")
const { test, expect } = require("@jest/globals")

test("normalizeURL", () => {
    const input = "https://blog.boot.dev/path"
    const actual = normalizeURL(input)
    const expected = "blog.boot.dev/path"
    expect(actual).toEqual(expected)
})

test("normalizeURL strip slash", () => {
    const input = "https://blog.boot.dev/path"
    const actual = normalizeURL(input)
    const expected = "blog.boot.dev/path"
    expect(actual).toEqual(expected)
})

test("normalizeURL capitalize", () => {
    const input = "https://BLOG.boot.dev/path"
    const actual = normalizeURL(input)
    const expected = "blog.boot.dev/path"
    expect(actual).toEqual(expected)
})
test("normalizeURL http", () => {
    const input = "http://blog.boot.dev/path"
    const actual = normalizeURL(input)
    const expected = "blog.boot.dev/path"
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="https://blog.boot.dev/">Link</a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML relative", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="/path/">Link</a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML multiple", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path1/">Link</a>
            <a href="/path2/">Link</a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML badurl", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="invalid">Link</a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})
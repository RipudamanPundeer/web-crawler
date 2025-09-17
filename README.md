# Web Crawler

A simple Node.js web crawler that recursively crawls a website, collects all internal links, and generates a report of visited pages.

## Features
- Recursively crawls all pages within the same domain
- Handles both absolute and relative URLs
- Ignores non-HTML content and external domains
- Generates a report of all visited pages and their visit counts
- Includes unit tests for core functions

## Requirements
- Node.js (v16 or higher recommended)
- npm

## Installation
1. Clone this repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage
To start crawling a website:
```sh
npm start <URL>
```
Example:
```sh
npm start https://webscraper.io/test-sites/e-commerce/allinone
```

## Scripts
- `npm start <URL>`: Start crawling from the given URL
- `npm test`: Run unit tests with Jest

## Project Structure
- `main.js` — Entry point, handles CLI and starts the crawl
- `crawl.js` — Core crawling logic and HTML URL extraction
- `report.js` — Sorting and printing the crawl report
- `crawl.test.js` — Unit tests for crawling and URL functions
- `report.test.js` — Unit tests for report sorting

## Example Output
```
Starting crawl of https://webscraper.io/test-sites/e-commerce/allinone
Crawling https://webscraper.io/test-sites/e-commerce/allinone
... (more crawling logs) ...
=== Report ===
https://webscraper.io/test-sites/e-commerce/allinone: 5 pages
https://webscraper.io/test-sites/e-commerce/allinone/computers: 2 pages
... (more pages) ...
=== End Report ===
```

## License
MIT

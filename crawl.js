const { JSDOM } = require("jsdom")

function getURLsFromHTML(html,baseURL){
    const urls = []
    const dom = new JSDOM(html)
    const linkElements = dom.window.document.querySelectorAll("a")
    for (const link of linkElements){
        if(link.href.slice(0,1) === "/"){
            try{
                const urlObj = new URL(`${baseURL}${link.href}`)
                urls.push(`${baseURL}${link.href}`)
            }
            catch{
                console.log(`error with relative url: ${link.href}`)
            }
        }
        else{
            try{
                const urlObj = new URL(link.href)
                urls.push(link.href)
            }
            catch{
                console.log(`error with absolute url: ${link.href}`)
            }
        }
        
    }
    return urls
}

function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length > 0 && hostPath.slice(-1) === "/"){
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = { normalizeURL, getURLsFromHTML }
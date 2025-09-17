function sortPages(pages){
    const pagesArray = Object.entries(pages)
    pagesArray.sort((a,b) => b[1] - a[1])
    return pagesArray
}
function printReport(pages){
    console.log("=== Report ===")
    const sortedPages = sortPages(pages)
    for(const [page, count] of sortedPages){
        console.log(`${page}: ${count} pages`)
    }
    console.log("=== End Report ===")
}
module.exports = { sortPages, printReport }
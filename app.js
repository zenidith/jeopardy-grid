/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = await response.json()
    return data
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        <div class="my-category-clue">$100</div>
        <div class="my-category-clue">$200</div>
        <div class="my-category-clue">$300</div>
        <div class="my-category-clue">$400</div>
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="board">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
})
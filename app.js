async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = await response.json()
    return data
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="board">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
})
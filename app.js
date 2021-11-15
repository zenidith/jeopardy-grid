async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories");
    let data = await response.json();
    return data;
}

getCategories().then(categories => {
    console.log(categories);
    document.body.innerHTML = `<div class"board">
    <div class="my-category-title">${categories[0].title}</div>
    </div>`
})
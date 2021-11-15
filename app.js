async function getCategories() {
    let response = await fetch('https://jservice.io/api/categories');
    let data = await response.json();
    console.log(data);
}
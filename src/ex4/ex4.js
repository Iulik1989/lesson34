const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
    const parsed = await response.json()
    return parsed;
}

getData()

module.exports = getData;
export function getData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {return data})
    .catch(err => console.error(err))
}

export function userData() {
    getData("")
}
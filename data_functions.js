
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.items
}

function separateDataToPages(data, pageSize) {
    const pagedData = []
    for(let i = 0; i < data.length; i+=pageSize) {
        pagedData.push(data.slice(i, i+pageSize))
    }
    return pagedData
}

function cleanData(data) {
    data.forEach(data => {
        data.description = data.description
            .replace(/:\w+:/g, "") //remove emojis
            .replace(/&/g, "&amp;") //show &
            .replace(/</g, "&lt;") //show html tags
            .replace(/>/g, "&gt;")
            .trim(); //remove whitespace from front and end of description

        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    })
    return data
}

export {getData, separateDataToPages, cleanData}
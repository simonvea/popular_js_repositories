
async function getData() {
    const gitHubUrl = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";
    const pageSize = 20;

    const response = await fetch(gitHubUrl);
    const data = await response.json();
    const repositories = data.items;
    const cleanedData = cleanData(repositories);
    const pageSeparatedData = separateDataToPages(cleanedData, pageSize);
    
    return pageSeparatedData
}

function cleanData(data) {
    data.forEach(repository => {
        repository.description = repository.description
            .replace(/:\w+:/g, "") //remove emojis
            .replace(/&/g, "&amp;") //show &
            .replace(/</g, "&lt;") //show html tags
            .replace(/>/g, "&gt;")
            .trim(); //remove whitespace from front and end of description
            
            repository.name = repository.name.charAt(0).toUpperCase() + repository.name.slice(1)
    })
    return data
}

function separateDataToPages(data, pageSize) {
    const pagedData = []
    for(let i = 0; i < data.length; i+=pageSize) {
        pagedData.push(data.slice(i, i+pageSize))
    }
    return pagedData
}

export default getData
import repositories from "./main.js"

function createNavbar(pageSeparatedData) {
    const navbar = document.querySelector(".navbar");
    const html = [];

    //create navbar content
    for(let pageNumber = 1; pageNumber <= pageSeparatedData.length; pageNumber++) {
        html.push(`<a>${pageNumber}</a>`)
    }
    navbar.innerHTML = html.join('');

    //add eventlisteners
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => link.addEventListener("click", updatePage))
}


function updatePagination(index) {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[index].classList.add("active")
}

function updateTable(data) {
    const tableBody = document.querySelector("tbody");
    const html = data.map(rep => {
        return `
        <tr>
            <td>${rep.stargazers_count}</td>
            <td>${rep.name}</td>
            <td>${rep.description}</td>
            <td><a href="${rep.html_url}" target="_blank">Link</a></td>
        </tr>
        `
    }).join('');

    tableBody.innerHTML = html
}

function updatePage() {
    const index = this.innerText-1;
    updatePagination(index)
    updateTable(repositories[index]) //NB!!! Using global data "repositories"!
}

export {updateTable, createNavbar, updatePagination}
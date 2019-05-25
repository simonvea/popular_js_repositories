import data from "./main.js"

function createNavbar(numberOfPages) {
    const navbar = document.querySelector(".navbar");
    const html = [];
    
    for(let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
        html.push(`<a>${pageNumber}</a>`)
    }
    
    navbar.innerHTML = html.join('');
}

function addNavbarEvents() {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => link.addEventListener("click", updatePage))
}

function updatePage() {
    const index = this.innerText-1;
    const page = data[index];

    updatePagination(index);
    updateTable(page);
}

function updatePagination(index) {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[index].classList.add("active")
}

function updateTable(page) {
    const tableBody = document.querySelector("tbody");
    const html = page.map(row => {
        return `
        <tr>
            <td>${row.stargazers_count}</td>
            <td>${row.name}</td>
            <td>${row.description}</td>
            <td><a href="${row.html_url}" target="_blank">Link</a></td>
        </tr>
        `
    }).join('');

    tableBody.innerHTML = html
}

function errorDomMessage() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = `
        <tr>
            <td colspan="4" style="text-align: center">
                <h3> Noe gikk galt i loading av data. Se konsoll for mer informasjon.</h3>
            </td>
        </tr>`
}



export {updateTable, createNavbar, addNavbarEvents, updatePagination, errorDomMessage}
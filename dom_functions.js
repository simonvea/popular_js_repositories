import pagedData from "./main.js"

function createNavbar(pages) {
    const navbar = document.querySelector(".navbar");
    const html = [];
    
    pages.forEach((page, pageNumber) => html.push(`<a>${pageNumber}</a>`)).join('')
    navbar.innerHTML = html;
}

function addNavbarEvents() {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => link.addEventListener("click", updatePage))
}

function updatePage() {
    const index = this.innerText-1;
    const page = pagedData[index];

    updatePagination(index);
    updateTable(page);
}

function updatePagination(index) {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[index].classList.add("active")
}

function updateTable(data) {
    const tableBody = document.querySelector("tbody");
    const html = data.map(row => {
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



export {updateTable, createNavbar, addNavbarEvents, updatePagination}
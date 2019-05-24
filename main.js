import {getData, cleanData, separateDataToPages} from "./data_functions.js"
import {updateTable, createNavbar, updatePagination} from "./dom_functions.js"

const gitHubUrl = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";

const repositories = [];

getData(gitHubUrl)
    .then(data => {
        //fix data and push to local state
        const cleanedData = cleanData(data);
        const separatedData = separateDataToPages(cleanedData, 20);
        repositories.push(...separatedData);

        //present data
        updateTable(repositories[0]); //update table with first page of repositories
        createNavbar(repositories); //create navbar based on how many pages of repositories
        updatePagination(0); //set first page as active page by sending the first index in navbar nodeList
    })
    .catch(err => {
        console.error("Noe gikk galt!", err);
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center"><h3> Noe gikk galt i loading av data. Se konsoll for mer informasjon.</h3></td></tr>`
    });

export default repositories




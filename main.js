import getData from "./data_functions.js"
import {updateTable, createNavbar, addNavbarEvents, setActiveNumber, errorDomMessage} from "./dom_functions.js"

const repositories = [];

getData()
    .then(data => {
        repositories.push(...data);

        const firstPage = repositories[0];
        const pageIndex = 0;
        const numberOfPages = repositories.length;

        updateTable(firstPage);
        createNavbar(numberOfPages);
        addNavbarEvents();
        setActiveNumber(pageIndex);
    })
    .catch(err => {
        console.error("Noe gikk galt!", err);
        errorDomMessage();
    });

export default repositories




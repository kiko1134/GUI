async function getInfo(table) {

    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");

    const response = await fetch('https://api.covid19api.com/countries');
    const json = await response.json();

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    const h1 = document.createElement("th");
    const h2 = document.createElement("th");
    const h3 = document.createElement("th");

    h1.textContent = "Country";
    tableHead.querySelector("tr").appendChild(h1);

    h2.textContent = "Slug";
    tableHead.querySelector("tr").appendChild(h2);

    h3.textContent = "ISO2";
    tableHead.querySelector("tr").appendChild(h3);


    json.forEach(obj => {
        const rowElement = document.createElement("tr");
        console.log(obj);
        Object.entries(obj).forEach(value => {
            console.log(`${value[1]}`);
            const cellElement = document.createElement("td");
            cellElement.textContent = value[1].toString();
            rowElement.appendChild(cellElement);
        });
        tableBody.appendChild(rowElement);
        }
    )

    // for(const obj of json){
    //     const rowElement = document.createElement("tr");
    //     console.log(obj);
        // for(const cell of obj){
        //     console.log(cell);
        //     const cellElement = document.createElement("td");
        //
        //     cellElement.textContent = cell;
        //     rowElement.appendChild(cell);
        // }
        // tableBody.appendChild(rowElement);
    // }
}

getInfo(document.querySelector('table'));

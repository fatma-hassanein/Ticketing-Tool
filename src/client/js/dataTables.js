function fetchData() { 

    const tBody = document.getElementById("TKTtable");

    fetch("/Data")
    .then(response => response.json())
    .then(allData => {
        console.log("Fetch Data");
        console.log(allData);

        allData.forEach(data => {
        const tr = document.createElement("tr");
        tBody.appendChild(tr);

        for (const element in data) {
            const td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = data[element];
        }

        });
    });
}

fetchData();

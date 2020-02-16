import { fetchDataFromFile } from './dataTables.js'

function getUserInputs (){

    let issueTitle = document.getElementById("title");
    let issueDropdown = document.getElementById("issueType");
    let teamDropdown = document.getElementById("team");
    let descriptionText = document.getElementById("description");

    let data = {};

    data.title = issueTitle.value;
    data.selectedIssue = issueDropdown.options[issueDropdown.selectedIndex].text;
    data.selectedTeam = teamDropdown.options[teamDropdown.selectedIndex].text;
    data.description = descriptionText.value;

    console.log(data);

    fetch("http://localhost:3000/Data",
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })

    window.location.href = '/dataTable.html';
    fetchDataFromFile();
}

export { getUserInputs }
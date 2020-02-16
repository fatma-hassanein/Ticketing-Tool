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
}

export { getUserInputs }
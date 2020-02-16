 function getTicketsHistory (){
   
      let x = document.getElementById("issueType");
      let issueTypeList = [];

      for (let i = 0; i < x.length; i++) {
          issueTypeList[i]=x.options[i].value; 
      }
      console.log(issueTypeList);

      let info = document.getElementById("info");   //HTML Collection

      for ( let j = 1 ; j < issueTypeList.length ; j++){

          let infoItem = document.createElement('p');
          console.log(infoItem);
          infoItem.innerHTML='You have created 12 tickets related to ' + '<span>' + issueTypeList[j] + '</span>';
          info.appendChild(infoItem);
      }
      let total = document.createElement('p');
      total.className='total';
      total.innerHTML='Total 48 tickets';
      info.appendChild(total);
}

getTicketsHistory();

export { getTicketsHistory }

/*

let issueDropdown = document.getElementById("issueType");
let teamDropdown = document.getElementById("team");
let descriptionText = document.getElementById("description");

// issueDropdown.addEventListener("change",updateSelectedIssue);
// teamDropdown.addEventListener("change",updateSelectedTeam);
// descriptionText.addEventListener("change",updateDescription);

function updateSelectedIssue(){
    let selectedIssue = issueDropdown.options[issueDropdown.selectedIndex].text;
    console.log(selectedIssue);
}

function updateSelectedTeam(){
    let selectedTeam = teamDropdown.options[teamDropdown.selectedIndex].text;
    console.log(selectedTeam);
}

function updateDescription(){
    let description = descriptionText.value;
    console.log(description);
}

*/

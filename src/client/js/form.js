function getTicketsHistory() {
  let x = document.getElementById('issueType');
  let issueTypeList = [];

  for (let i = 0; i < x.length; i++) {
    issueTypeList[i] = x.options[i].value;
  }
  console.log(issueTypeList);

  let info = document.getElementById('info'); //HTML Collection

  for (let j = 1; j < issueTypeList.length; j++) {
    let infoItem = document.createElement('p');
    console.log(infoItem);
    infoItem.innerHTML = 'You have created 12 tickets related to ' + '<span>' + issueTypeList[j] + '</span>';
    info.appendChild(infoItem);
  }
  let total = document.createElement('p');
  total.className = 'total';
  total.innerHTML = 'Total 48 tickets';
  info.appendChild(total);
}

//////////////////////////////////////////////////

function getUserInputs() {
  let issueTitle = document.getElementById('title');
  let issueDropdown = document.getElementById('issueType');
  let teamDropdown = document.getElementById('team');
  let descriptionText = document.getElementById('description');

  let data = {};

  data.title = issueTitle.value;
  data.selectedIssue = issueDropdown.options[issueDropdown.selectedIndex].text;
  data.selectedTeam = teamDropdown.options[teamDropdown.selectedIndex].text;
  data.description = descriptionText.value;

  console.log(data);

  fetch('http://localhost:3000/Data', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(res) {
      console.log(res);
    });
}

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  getUserInputs();
});

export { getUserInputs, getTicketsHistory };

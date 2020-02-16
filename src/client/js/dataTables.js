function fetchDataFromFile (){

    fetch("http://localhost:3000/Data")
    .then(
        function(data){
            console.log("Data fetched 1"+data);
            return data.json();
        }
    )
    .then(function(data){
        console.log(data);
    }
    )
    .catch(function(res){ console.log(res) })
}

fetchDataFromFile();

export { fetchDataFromFile }
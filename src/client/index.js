import './styles/style.scss'
import logo from './assets/images/logo.png'
import { getTicketsHistory } from './js/app'
import { getUserInputs } from './js/form'
import { fetchDataFromFile } from './js/dataTables'


document.getElementById('logo').src = logo;

fetchDataFromFile();

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    getUserInputs();
});

export { 
    getTicketsHistory,
    getUserInputs,
    fetchDataFromFile
}

import './styles/style.scss'
import logo from './assets/images/logo.png'
import { getTicketsHistory } from './js/app.js'
import { getUserInputs } from './js/form.js'

document.getElementById('logo').src = logo;

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    getUserInputs();
});

export { 
    getTicketsHistory,
    getUserInputs 
}

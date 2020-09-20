// import _ from 'lodash';
import './styles/style.css';
import homeDiv from './home';
import menuDiv from './menu';
import contactDiv from './contact';
import nav from './nav';

const content = document.getElementById('content');

function show(e) {
  const child = content.children[1];
  if (e.id === 'tab2') {
    content.removeChild(child);
    content.appendChild(menuDiv());
  }

  if (e.id === 'tab3') {
    content.removeChild(child);
    content.appendChild(contactDiv());
  }

  if (e.id === 'tab1') {
    content.removeChild(child);
    content.appendChild(homeDiv());
  }
}


window.onload = () => {
  content.innerHTML = nav();
  content.appendChild(homeDiv());
  const tabs = document.getElementsByClassName('tab');
  [...tabs].forEach(tab => tab.addEventListener('click', () => show(tab)));
};
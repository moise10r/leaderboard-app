import './style/style.css';
import { getGame, createGame } from './contollers';

const render = () => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML += ` <li class="score">
      <span>Name: </span>
      <span>100</span>
    </li>
    <li class="score">
      <span>Name: </span>
      <span>50</span>
    </li>  <li class="score">
      <span>Name: </span>
      <span>200</span>
    </li>  <li class="score">
      <span>Name: </span>
      <span>20</span>
    </li>
    <li class="score">
      <span>Name: </span>
      <span>10</span>
    </li>`;
};

const form = document.getElementById('add-score');
const inputs = form.querySelectorAll('input');
console.log(inputs);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputs[0].value;
  const score = inputs[1].value;
  const data = {
    name,
    score,
  };
  // createGame(data);
  console.log(createGame(data));
  console.log(data);
});
// console.log(getGame());
render();
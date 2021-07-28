import './style/style.css';
import { getGame, submitScore, createGame } from './contollers';

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

const gameName = 'sokoba';
window.addEventListener('load', async () => {
  const result = await createGame(gameName);
  const id = result.split(' ')[3];
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = inputs[0].value;
    const score = inputs[1].value;
    const data = {
      user,
      score,
    };
    const result = await submitScore(data, id);
    console.log(result);
  });
});

render();
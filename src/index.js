import './style/style.css';
import { getGames, submitScore, createGame } from './contollers';

const render = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scores.forEach(({ user, score }) => {
    scoresList.innerHTML += ` 
      <li class="score">
        <span>${user}: </span>
        <span>${score}</span>
      </li>`;
  });
};

const form = document.getElementById('add-score');
const inputs = form.querySelectorAll('input');
const refreshBtn = document.querySelector('.refresh');
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
    await submitScore(data, id);
  });
  refreshBtn.addEventListener('click', async () => {
    const res = await getGames(id);
    render(res);
  });
});

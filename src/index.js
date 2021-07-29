import './style/style.css';
import { getGames, submitScore, createGame } from './contollers';

const render = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `<span>${user}:</span><span>${score}</span>`;
    scoresList.appendChild(li);
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
    form.reset();
  });
  refreshBtn.addEventListener('click', async () => {
    const res = await getGames(id);
    render(res);
  });
});

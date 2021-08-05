import './style/style.css';
import avatar from './avatar.jpg';
import { getGames, submitScore, createGame } from './contollers';

const section = document.querySelector('.main-container-section');

section.innerHTML = `
<div class="main-wrapper flex-center">
<div class="main-left-wrappe flex-center">
  <div class="refresh-container flex-between">
    <p>Recent Scores</p>
    <button type="button" class="refresh">Refresh</button>
  </div>
  <ul class="scores-list flex-center">
  </ul>
</div>
<div class="main-right-wrapper flex-center">
  <h2>Add your score</h2>
  <form id="add-score"  class="flex-center" action="/">
    <input type="text" placeholder="Your name" required>
    <input type="text" placeholder="Your score" required>
    <button type="submit">submit</button>
  </form>
</div>
</div>
`;

const render = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `
    <span class="flex-center">
      <span><img class="avatar" src="${avatar}" alt="avatar"></span>
      <span> ${user}:</span>
    </span>
    <span>${score}</span>`;
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

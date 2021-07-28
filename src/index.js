import './style/style.css';

const displayUI = () => {
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

displayUI();
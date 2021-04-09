import './styles.css';
import colors from './data';

const body = document.body;
const startBtn = document.querySelector("button[data-action='start']");
const stopBtn = document.querySelector("button[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});

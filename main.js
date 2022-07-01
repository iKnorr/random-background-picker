const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const btn = document.querySelector('.btn');

const backgroundColors = [
  'red',
  '#F5DF4D',
  'black',
  '#0072B5',
  'green',
  'salmon',
  'darkgrey',
  'darkolivegreen',
  'darkslateblue',
  'maroon',
  'steelblue',
  '#ff6f61',
];

const randomElement = () => {
  btn.classList.remove('btn-animation');
  const randomColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  wrapper.style.background = randomColor;
  header.innerText = `background-color: ${randomColor};`;
  setTimeout(() => {
    btn.classList.add('btn-animation');
  }),
    0;
};

btn.addEventListener('click', randomElement);

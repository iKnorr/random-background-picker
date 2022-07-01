const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const btn = document.querySelector('.btn');

const backgroundColors = [
  'red',
  'blue',
  'black',
  'blue',
  'green',
  'salmon',
  'darkgrey',
  'darkolivegreen',
  'darkslateblue',
  'maroon',
  'steelblue',
];

btn.addEventListener('click', function () {
  // wrapper.classList.remove('animation');
  const randomColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  wrapper.style.background = randomColor;
  header.innerText = `background-color: ${randomColor};`;
  // setTimeout(() => {
  //   wrapper.classList.add('animation');
  // }),
  //   0;
});

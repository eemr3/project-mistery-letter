const arrayClassList = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

function getElementParagraph() {
  const printLetter = document.querySelector('#carta-gerada');
  return printLetter;
}

function rgenerateCassList() {
  const getClassArray = arrayClassList[Math.floor(Math.random() * 10)];
  return getClassArray;
}

function wordCounter() {
  const wordCount = document.querySelector('#carta-contador');
  const inputLetter = document.querySelector('#carta-texto');
  wordCount.innerHTML = inputLetter.value.split(' ').length;
}

function generateLetter() {
  const printLetter = getElementParagraph();
  const inputLetter = document.querySelector('#carta-texto');
  const letterValue = inputLetter.value.split(' ');
  if (inputLetter.value === '' || inputLetter.value === ' ') {
    console.log('tsss');
    printLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    printLetter.innerHTML = '';
    for (let index = 0; index < letterValue.length; index += 1) {
      const getClassStyle = rgenerateCassList();
      const spanLetter = document.createElement('span');
      spanLetter.innerHTML = letterValue[index];
      spanLetter.classList.add(getClassStyle);
      spanLetter.style.display = 'inline-block';
      printLetter.appendChild(spanLetter);
    }
    wordCounter();
  }
}

const btnGenerateLetter = document.querySelector('#criar-carta');
btnGenerateLetter.addEventListener('click', generateLetter);

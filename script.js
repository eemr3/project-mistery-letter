function getElementParagraph() {
  const printLetter = document.querySelector('#carta-gerada');
  return printLetter;
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
      const spanLetter = document.createElement('span');
      spanLetter.innerHTML = letterValue[index];
      printLetter.appendChild(spanLetter);
    }
  }
}

const btnGenerateLetter = document.querySelector('#criar-carta');
btnGenerateLetter.addEventListener('click', generateLetter);

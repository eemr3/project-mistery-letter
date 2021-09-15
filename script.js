function getValueInputLetter() {
  const inputLetter = document.querySelector('#carta-texto');
  const letterValue = inputLetter.value.split(' ');

  return letterValue;
}

function generateLetter() {
  const printLetter = document.querySelector('#carta-gerada');
  const letterValue = getValueInputLetter();
  printLetter.innerHTML = '';
  for (let index = 0; index < letterValue.length; index += 1) {
    const spanLetter = document.createElement('span');
    spanLetter.innerHTML = letterValue[index];
    printLetter.appendChild(spanLetter);
  }
}

const btnGenerateLetter = document.querySelector('#criar-carta');
btnGenerateLetter.addEventListener('click', generateLetter);

const pinIn = document.createElement('div');
pinIn.setAttribute('id', 'pinin');
const pin = document.createElement('input');
pin.setAttribute('id', 'pin');
pin.setAttribute('type', 'number');
pin.setAttribute('placeholder', ' Input PIN');
pinIn.appendChild(pin);

const submitPin = document.createElement('div');
submitPin.setAttribute('id', 'submit');
const pSP = document.createElement('p');
pSP.textContent = 'Get Answers';
submitPin.appendChild(pSP);
pinIn.appendChild(submitPin);
//Input for testportal===========================
const divInputs = document.createElement('div');
divInputs.setAttribute('id', 'inputs');

const inputURL = document.createElement('input');
inputURL.setAttribute('id', 'inputURL');
inputURL.setAttribute('type', 'text');
inputURL.setAttribute('placeholder', ' Input URL');
divInputs.appendChild(inputURL);

const submit = document.createElement('div');
submit.setAttribute('id', 'submit');
const pS = document.createElement('p');
pS.textContent = 'Get Answers';
submit.appendChild(pS);

divInputs.appendChild(submit);
// ===============================================


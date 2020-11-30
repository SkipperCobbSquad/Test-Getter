const app = document.getElementById('app');
//Selector
const selector = document.createElement('div');
selector.setAttribute('id', 'selector');
//TestPortal BTN
const portalSelector = document.createElement('div');
portalSelector.setAttribute('id', 'portalSelector');
portalSelector.addEventListener('click', renderPortal);
const pSP = document.createElement('p');
pSP.textContent = 'TestPortal';
portalSelector.appendChild(pSP);
selector.appendChild(portalSelector);
//quizizz BTN
const quizizzSelector = document.createElement('div');
quizizzSelector.setAttribute('id', 'quizizzSelector');
quizizzSelector.addEventListener('click', renderQuizizz)
const pSQ = document.createElement('p');
pSQ.textContent = 'Quizizz';
quizizzSelector.appendChild(pSQ);
selector.appendChild(quizizzSelector);
app.appendChild(selector);

//TODO: Sort answers !!
//TODO: Fix req to answer in testportal
//TODO: Start iputs field
//TODO: PIN input for testportal
//TODO: Get images and or films also
//TODO: Live version testportal like Quizizz whit addons
//TODO: Addons for Quizizz for live?
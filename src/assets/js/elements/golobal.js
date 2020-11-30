let bar; //Its define progress bar

//Loader=====================================*
const load = document.createElement('div');
load.classList.add('label-center');
load.setAttribute('id', 'load');
load.setAttribute(
  'style',
  ' position: absolute; width: 100%; height: 50%; top: 25%; color: white;'
);
//===========================================*

// Button for next test===================B
const exit = document.createElement('div');
exit.setAttribute('id', 'nexttest');
const pN = document.createElement('p');
pN.textContent = 'Exit';
exit.appendChild(pN);
exit.addEventListener('click', (e) => {
  app.innerHTML = ''
  app.appendChild(selector)
});
//=========================================B
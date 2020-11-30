// RenderEnter
const renderPortal = () => {
  app.removeChild(selector);

  app.appendChild(divInputs);
  app.appendChild(exit);
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      getAnswers();
    }
  };

  submit.addEventListener('click', getAnswers);
  inputURL.addEventListener('keyup', (e) => onEnter(e));
};

const getAnswers = async () => {
  if (inputURL.value == '') {
    alert("You didn't pass any URL");
  } else {
    app.removeChild(divInputs);
    app.removeChild(exit)
    app.appendChild(load);
    //Use loader js API=========-
    bar = new ldBar('#load', {
      preset: 'energy',
      value: 0,
    });
    //==========================-
    bar.set(0, false);
    const { results, error } = await portal(inputURL.value); //Get results from test
    if (error) {
      app.removeChild(load);
      //Create error============================>
      const err = document.createElement('div');
      err.setAttribute('id', 'error');
      const errp = document.createElement('p');
      errp.textContent = error;
      err.appendChild(errp);
      //========================================>
      app.appendChild(err);
      app.appendChild(exit);
      new Notification('TestGetter', {
        icon: './assets/icons/Logo.ico',
        body: `${error}`,
      });
    } else {
      const test = new Test(results)
      const testTable = test.render()
      bar.set(100, false);
      inputURL.value = ''
      app.removeChild(load);
      app.appendChild(testTable);
      app.appendChild(exit);
    }
  }
};

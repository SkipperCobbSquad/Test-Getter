const mongoose = require('mongoose');

const quizizz = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: MASTER_PATH,
  });
  const page = await browser.newPage();
  try {
    await page.setViewport({
      width: 0,
      height: 0,
      isLandscape: false,
    });
    await page.goto('https://quizizz.com/join');
    await bar.set(30);
    await page.waitForSelector('.player', {
      timeout: 0,
    });
    //Sender getterr=================================================>
    const test = await page.evaluate(() => {
      const ROOM_HASH_PATH = '/play-api/v4/checkRoom';
      const QUESTIONS_AND_RESPONSES_PATH = '/api/main/game/';
      const APP_PATH = '/join/';

      const getRoomHash = async () => {
        const linkParams = new URLSearchParams(window.location.search);
        let roomCode = linkParams.get('gc');

        if (!roomCode && window.location.pathname.includes(APP_PATH))
          roomCode = prompt('Enter join code (XXX XXX(X))', '');

        const init = {
          headers: {
            'content-type': 'application/json',
          },
          body: `{"roomCode": "${roomCode}"}`,
          method: 'POST',
        };

        const roomHashResponse = await fetch(ROOM_HASH_PATH, init);

        const roomHashJson = await roomHashResponse.json();
        const roomHash = roomHashJson?.room?.hash;
        return roomHash;
      };

      let data = getRoomHash().then((hash) => {
        let URL = window.location.href;
        const GameType = URL.slice(URL.search('gameType=') + 9, URL.length);
        data = {
          roomHash: hash,
          type: GameType,
        };

        let xhttp = new XMLHttpRequest();
        xhttp.open(
          'POST',
          'https://game.quizizz.com/play-api/v4/getQuestions',
          false
        );
        xhttp.setRequestHeader(
          'Content-Type',
          'application/json;charset=UTF-8'
        );
        xhttp.send(JSON.stringify(data));
        return JSON.parse(xhttp.responseText);
      });
      return data;
    });
    //===========================================================================>
    bar.set(70, false);
    console.log(test);
    return { test, error: false };
  } catch (error) {
    console.log(error);
    return { test: {}, error };
  }
};

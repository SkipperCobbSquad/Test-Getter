const quizizz = async (pin) => {
  const ROOM_HASH_PATH = 'https://quizizz.com/play-api/v4/checkRoom';
  const QUESTIONS_AND_RESPONSES_PATH = 'https://quizizz.com/api/main/game/';
  const APP_PATH = 'https://quizizz.com/join/';

  const getRoomHash = async () => {
    roomCode = pin;

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
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhttp.send(JSON.stringify(data));
    return JSON.parse(xhttp.responseText);
  });
  return data
};

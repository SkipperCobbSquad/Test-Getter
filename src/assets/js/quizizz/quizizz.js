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
    await bar.set(30)
    await page.waitForSelector('.player', {
      timeout: 0,
    });
    //Sender getterr=================================================>
    const test = await page.evaluate(() => {
      class Encoding {
        static encodeRaw(t, e, o = 'quizizz.com') {
          let s = 0;
          s = e
            ? o.charCodeAt(0)
            : o.charCodeAt(0) + o.charCodeAt(o.length - 1);
          let r = [];
          for (let o = 0; o < t.length; o++) {
            let n = t[o].charCodeAt(0),
              c = e ? this.safeAdd(n, s) : this.addOffset(n, s, o, 2);
            r.push(String.fromCharCode(c));
          }
          return r.join('');
        }

        static decode(t, e = !1) {
          if (e) {
            let e = this.extractHeader(t);
            return this.decodeRaw(e, !0);
          }
          {
            let e = this.decode(this.extractHeader(t), !0),
              o = this.extractData(t);
            return this.decodeRaw(o, !1, e);
          }
        }

        static decodeRaw(t, e, o = 'quizizz.com') {
          let s = this.extractVersion(t);
          let r = 0;
          (r = e
            ? o.charCodeAt(0)
            : o.charCodeAt(0) + o.charCodeAt(o.length - 1)),
            (r = -r);
          let n = [];
          for (let o = 0; o < t.length; o++) {
            let c = t[o].charCodeAt(0),
              a = e ? this.safeAdd(c, r) : this.addOffset(c, r, o, s);
            n.push(String.fromCharCode(a));
          }
          return n.join('');
        }

        static addOffset(t, e, o, s) {
          return 2 === s
            ? this.verifyCharCode(t)
              ? this.safeAdd(t, o % 2 == 0 ? e : -e)
              : t
            : this.safeAdd(t, o % 2 == 0 ? e : -e);
        }

        static extractData(t) {
          let e = t.charCodeAt(t.length - 2) - 33;
          return t.slice(e, -2);
        }

        static extractHeader(t) {
          let e = t.charCodeAt(t.length - 2) - 33;
          return t.slice(0, e);
        }

        static extractVersion(t) {
          if ('string' == typeof t && t[t.length - 1]) {
            let e = parseInt(t[t.length - 1], 10);
            if (!isNaN(e)) return e;
          }
          return null;
        }

        static safeAdd(t, e) {
          let o = t + e;
          return o > 65535
            ? o - 65535 + 0 - 1
            : o < 0
            ? 65535 - (0 - o) + 1
            : o;
        }

        static verifyCharCode(t) {
          if ('number' == typeof t)
            return !((t >= 55296 && t <= 56319) || (t >= 56320 && t <= 57343));
        }
      }

      function GetSetData() {
        let URL = window.location.href,
          GameType = URL.slice(URL.search('gameType=') + 9, URL.length),
          prevConx = localStorage.getItem('previousContext'),
          parsedConx = JSON.parse(prevConx),
          encodedRoomHash = parsedConx.game.roomHash,
          roomHash = Encoding.decode(encodedRoomHash.split('-')[1]),
          data = {
            roomHash: roomHash,
            type: GameType,
          };
        console.log(URL);

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
      }

      return GetSetData();
    });
    //===========================================================================>
    bar.set(70, false)
    return {test, error: false};
  } catch (error) {
    console.log(error);
    return {test: {}, error}
  }
};

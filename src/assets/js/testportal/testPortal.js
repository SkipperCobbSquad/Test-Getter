
const portal = async (pageson) => {
  const results = [];
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: MASTER_PATH,
  });
  const page = await browser.newPage();
  try {
    await bar.set(5);
    await page.goto(pageson);
    await bar.set(10);
    await page.evaluate(() => {
      document.querySelectorAll('input').forEach((input) => {
        if (!(input.type === 'hidden')) {
          input.value = ' ᠌᠌ ᠌ ᠌ ';
        }
      });
    });
    await page.click('#start-form-submit');
    await bar.set(20);
    await page.waitForSelector('form');
    let much = await page.evaluate(() => {
      const str = document.querySelector('.question_header_content');
      const num0 = str.textContent.slice(-2);
      if (+num0) {
        return +num0;
      } else {
        const num = str.textContent.slice(-1);
        return +num;
      }
    });
    await bar.set(30);
    console.log(much);
    for (let i = 1; i <= much; i++) {
      await page.waitForSelector('.question-container');
      const result = await page.evaluate(() => {
        let res = {};
        let quest = '';
        const questBox = document.querySelector('.question-container').children;
        //Get type of quest
        const selector = questBox[1].value;
        //Get all p in section quest
        const allQP = questBox[3].querySelectorAll('p');
        if (allQP.length > 1) {
          allQP.forEach((p) => {
            quest += `${p.textContent} `;
          });
        } else {
          quest += `${allQP[0].textContent}`;
        }
        if (selector === 'DESCRIPTIVE' || selector === 'SHORT_ANSWER') {
          res = { quest, selector };
        } else {
          const answers = [];
          const answBox = questBox[4].querySelectorAll('div .answer_container');
          for (const answ of answBox) {
            oneAnsw = '';
            allAP = answ.querySelectorAll('p');
            if (allAP.length > 1) {
              answ.querySelectorAll('p').forEach((p) => {
                oneAnsw += `${p.textContent} `;
              });
              answers.push(oneAnsw);
            } else {
              oneAnsw += `${allAP[0].textContent}`;
              answers.push(oneAnsw);
            }
          }
          res = { quest, answers, selector };
        }
        return res;
      });
      results.push(new Quest(result.quest, result?.answers, result.selector));
      await page.click('.mdc-button');
    }
    await bar.set(90);
    await browser.close();

    return await { results, error: false };
  } catch (err) {
    console.log(err);
    return await { results: [], error: err };
  }
};

module.exports = portal

//SINGLE_ANSWER
//TRUE_FALSE
//SURVEY
//DESCRIPTIVE
//MULTI_ANSWER
//SHORT_ANSWER

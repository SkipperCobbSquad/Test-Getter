class Quest {
  constructor(quest, answers = [], type) {
    this.quest = quest; // Single string
    this.answers = answers; // Array of answers
    this.type = type; //Type of question
  }

  render() {
    const que = document.createElement('div');
    que.classList.add('quest');
    const pQ = document.createElement('p');
    pQ.textContent = this.quest;
    que.appendChild(pQ);
    const pT = document.createElement('p');
    pT.textContent = 'Typo: ' + this.type;
    que.appendChild(pT);
    if (this.answers !== []) {
      const ulAnsw = document.createElement('ul');
      for (const answ of this.answers) {
        const liAnsw = document.createElement('li');
        liAnsw.textContent = answ;
        ulAnsw.appendChild(liAnsw);
      }
      que.appendChild(ulAnsw);
    }
    return que;
  }
}

class Test {
  constructor(questions) {
    this.questions = questions;
  }

  sorted() {
    return this.questions.sort((a, b) => {
      if (a.quest < b.quest) {
        return -1;
      }
      if (a.quest > b.quest) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    const table = document.createElement('table');
    table.setAttribute('id', 'tableq');
    table.setAttribute('cellpadding', '2');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    const sortedQuest = this.sorted();
    console.log(sortedQuest);
    for (const res of sortedQuest) {
      const tr = document.createElement('tr');
      tr.appendChild(res.render());
      tbody.appendChild(tr);
    }
    return table;
  }
}

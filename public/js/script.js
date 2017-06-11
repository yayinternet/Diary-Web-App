
console.log("in script.js");
let date = new Date();
const diaryContainer = document.querySelector('#entry');
const journalId = document.querySelector('title').textContent;
console.log("In script: Journal Id: ", journalId);
let dateStr = date.toLocaleString().substr(0, date.toLocaleString().indexOf(','));
const diary = new DiaryContainer(diaryContainer, dateStr, journalId);
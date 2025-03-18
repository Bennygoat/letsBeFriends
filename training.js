// 1. 建friendlist
// 2. friendlist長度
// 3. onload即隨機出題，顯示照片，array = 0，alert: u don't have friends
// 4. 回答正確，題目-1，friendlist移除，settimeout跳出答對，settimeout繼續隨機出題
// 5. 回答不正確，settimeout跳出答對，settimeout繼續隨機出題
// 6. friendlist長度 = 0，跳出全部答題完畢，請去交新朋友

// basic data setting
const friendList = JSON.parse(localStorage.getItem("friendData")) || [];
let quizNums = friendList.length;
//
let randomQuizIndex = Math.floor(Math.random() * quizNums);
let selectedQuizIndex = [];
let randomQuiz = null;
let quizAnswer = "";

// function pop a random quiz
function popQuestion(aRandomNum, quizNums = quizNums) {
  if (quizNums) {
    // default quiz
    selectedQuizIndex.push(aRandomNum);
    randomQuiz = friendList[selectedQuizIndex];
    quizImg.src = randomQuiz.photo;
    quizAnswer = randomQuiz.name;
    return selectedQuizIndex;
  } else {
    // quizNums = 0 situation
    alert("All the questions have been answered!");
  }
}

// ask again data modify function

window.addEventListener("load", (e) => {
  popQuestion(randomQuizIndex);
});

// submitBtn.addEventListener("click", (e) => {
//   let answer = answerInput.value.trim();
//   if (answer === randomQuiz.name) {
//     alert("congrats");
//     friendList.splice(selectedQuizIndex[0], 1);
//     selectedQuizIndex.pop();
//   }
// });

// submitBtn.onclick = (e) => {
//   e.preventDefault();
//   let answer = answer.value.trim();
//   console.log(answer);
//   console.log(randomQuiz.name);

//   if (answer === randomQuiz.name) {
//     alert("congrats");
//   }
// };

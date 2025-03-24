// 1. 建friendlist
// 2. friendlist長度
// 3. onload即隨機出題，顯示照片，array = 0，alert: u don't have friends
// 4. 回答正確，題目-1，friendlist移除，settimeout跳出答對，settimeout繼續隨機出題
// 5. 回答不正確，settimeout跳出答對，settimeout繼續隨機出題
// 6. friendlist長度 = 0，跳出全部答題完畢，請去交新朋友

// basic data setting
let friendList = JSON.parse(localStorage.getItem("friendData")) || [];
let quizNums = friendList.length;
//
let randomQuizIndex = Math.floor(Math.random() * quizNums);
let selectedQuizIndex = [];
let randomQuiz = null;
let quizAnswer = "";

// function pop a random quiz
function popQuestion(aRandomNum) {
  if (quizNums) {
    // default quiz
    selectedQuizIndex.push(aRandomNum);
    randomQuiz = friendList[selectedQuizIndex[0]];
    quizImg.src = randomQuiz.photo;
    // 沒功能
    // mainContent.style.background = `url('${randomQuiz.photo}') no-repeat;`
    // mainContent.style.background = `url('./img/笑臉.png') no-repeat;`
    // mainContent.style.backgroundSize = 'cover'
    quizAnswer = randomQuiz.name;
    return selectedQuizIndex;
  } else {
    // quizNums = 0 situation
    alert("No more questions");
  }
}

// ask again data modify function
function nextQuestion(removeIndex) {
  // delete quiz and reload quiz
  friendList.splice(removeIndex, 1);
  quizNums = friendList.length;
  selectedQuizIndex.pop();
  randomQuizIndex = Math.floor(Math.random() * quizNums);
  popQuestion(randomQuizIndex);
}

window.addEventListener("load", (e) => {
  popQuestion(randomQuizIndex);
});

submitBtn.addEventListener("click", (e) => {
  let answer = answerInput.value.trim();
  if (answer === quizAnswer) {
    alert("Basic");
    nextQuestion(selectedQuizIndex);
  } else {
    alert("You can do better");
  }
});

nextQBtn.addEventListener("click", (e) => {
  alert("You can do better");
  nextQuestion(selectedQuizIndex);
});







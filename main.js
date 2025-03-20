// login & out & user preload

tempLogIn.addEventListener("click", (e) => {
  let loggedInUser = inputName.value.trim();
  if (loggedInUser !== "") {
    localStorage.setItem("USER", loggedInUser);

    userName.innerText = loggedInUser;
  } else if (loggedInUser === "" && userName.innerText.trim() !== "") {
    alert("Don't Waste My Time!!!");
  } else {
    alert("Don't Be RUDE!!!");
  }
});

Bye.addEventListener("click", () => {
  localStorage.removeItem("USER");
  userName.innerText = "";
  inputName.value = "";
});

window.onload = () => {
  let savedUser = localStorage.getItem("USER");
  if (savedUser && savedUser.trim() !== "") {
    userName.innerText = savedUser;
  }
};

// if login mainCharacter moves

playround.addEventListener("click", moveMainCharacter);

function moveMainCharacter(e) {
  let characterX = e.clientX;
  let characterY = e.clientY;
  let nameX = characterX;
  let nameY = characterY;
  console.log(
    " mainCharacter.offsetWidth: " +
      mainCharacter.offsetWidth +
      " mainCharacter.offsetHeight: " +
      mainCharacter.offsetHeight +
      " characterX: " +
      characterX +
      " characterY: " +
      characterY
  );
  if (userName.innerText !== "") {
    let mainCharacterPosition =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
    let namePosition = "translate(" + nameX + "px, " + nameY + "px)";
    mainCharacter.style.transform = mainCharacterPosition;
    userName.style.transform = namePosition;
  }
}

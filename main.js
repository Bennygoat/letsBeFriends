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

// render fake friends

// render submit friends + fake friends

// remove fake friends

// random question(show submit friend photo)

// move main character, flip

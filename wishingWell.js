// 有空家preview spinner
// show preview
photoFileUploader.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    preview.src = reader.result;
  };
});

// submit friends info, photo
infoSubmit.addEventListener("click", (e) => {
  const name = document.querySelector("#name").value.trim();
  const location = document.querySelector("#location").value.trim();
  const file = photoFileUploader.files[0];

  if (!name || !location) {
    alert("Fill In Properly!!!");
    return;
  }

  if (!file) {
    alert("No Picture Selected!!!");
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const friendData = {
      name: name,
      location: location,
      photo: reader.result,
    };

    // 建立array，array get所有localStorage有"friendData"的物件
    let friendList = JSON.parse(localStorage.getItem("friendData")) || [];
    // 靶心的friendData丟進去
    friendList.push(friendData);

    // 為了不overwrite，每次不複寫，更新請單在單筆資料即可
    localStorage.setItem("friendData", JSON.stringify(friendList));
    alert("Friend added!");
  };
});

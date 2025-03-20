let friendlist = JSON.parse(localStorage.getItem("friendData")) || [];

realLifeFriendsBtn.onclick = () => {
  photoAlbum.innerHTML = "";
  friendlist.map((friend) => {
    photoAlbum.innerHTML += `
        <div class="card text-bg-dark m-4" style="width: 18rem; height: 18rem">
        <img src="${friend.photo}" class="card-img cover" alt="..." />
        <div class="card-img-overlay" >
        <h5 class="">${friend.name}</h5>
        <p class="card-text"><small>Location: ${friend.location}</small></p>
        </div>
        </div>
        `;
  });
  friendlist = [];
};

resetBtn.onclick = () => {
  photoAlbum.innerHTML = "";
  friendlist = JSON.parse(localStorage.getItem("friendData"));
};

pseudoFriendsBtn.onclick = () => {
  photoAlbum.innerHTML = "";
  let preventDoubbleData = new Promise((resolve, reject) => {
    axios.get("https://randomuser.me/api/?results=6").then((r) => {
      console.log(r);
      let fakeFriendlist = [...r.data.results];
      fakeFriendlist.map((fakeFriend) => {
        photoAlbum.innerHTML += `
          <div class="card text-bg-dark m-4" style="width: 18rem;  height: 18rem">
          <img src="${fakeFriend.picture.medium}" class="card-img" alt="..." />
          <div class="card-img-overlay">
          <h5 class="">${fakeFriend.name.first}</h5>
          <p class="card-text"><small>Location: ${fakeFriend.location.country}</small></p>
          </div>
          </div>      
        `;
      });
    });
    resolve("done");
  });
  preventDoubbleData.then((checked) => {
    if (checked === "done") {
      friendlist = JSON.parse(localStorage.getItem("friendData"));
    }
  });
};

// pseudoFriendsBtn.onclick = async () => {
//   photoAlbum.innerHTML = "";
//   fakeFriendlisthtml = ""
//   try{
//     await axios.get("https://randomuser.me/api/?results=6")
//     .then((r) => {
//     console.log(r);
//     let fakeFriendlist = [...r.data.results];
//     fakeFriendlist.forEach((fakeFriend) => {
//       fakeFriendlisthtml.innerHTML += `
//     <div class="col">
//         <div class="card text-bg-dark m-4" style="width: 18rem;">
//             <img src="${fakeFriend.picture.medium}" class="card-img-top" alt="..." />
//             <div class="card-body">
//                 <h5 class="card-title">${fakeFriend.name.first}</h5>
//                 <p class="card-text"><small>Location: ${fakeFriend.location.country}</small></p>
//             </div>
//         </div>
//     </div>
//         `;
//     });
// photoAlbum.innerHTML += fakeFriendlisthtml
// });
//   }

//   preventDoubbleData.then(() => {
//     friendlist = JSON.parse(localStorage.getItem("friendData"));
//   });
// };

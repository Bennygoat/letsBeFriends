let friendlist = JSON.parse(localStorage.getItem("friendData")) || [];
let isFakeFriends = true


realLifeFriendsBtn.onclick = () => {
    if (isFakeFriends) {
        realFriendlisthtml = "";
        friendlist = JSON.parse(localStorage.getItem("friendData"))
        friendlist.forEach((friend) => {
            realFriendlisthtml += `
            <div class="card text-bg-dark m-4" style="width: 18rem; height: 18rem">
            <img src="${friend.photo}" class="card-img cover" alt="..." />
            <div class="card-img-overlay" >
            <h5 class="">${friend.name}</h5>
            <p class="card-text"><small>Location: ${friend.location}</small></p>
            </div>
            </div>
            `;
        })
        photoAlbum.innerHTML = realFriendlisthtml
        isFakeFriends = false
    } else {
        return
    }
};

resetBtn.onclick = () => {
    photoAlbum.innerHTML = "";
    friendlist = JSON.parse(localStorage.getItem("friendData"));
    isFakeFriends = true
};



let getData = () => {
    return axios.get("https://randomuser.me/api/?results=6")
 }

pseudoFriendsBtn.onclick = async () => {
    try {
        let response = await getData()
        let fakeFriendlist = [...response.data.results]
        fakeFriendlisthtml = ""
        fakeFriendlist.forEach((fakeFriend) => {
            fakeFriendlisthtml += `
            <div class="card text-bg-dark m-4" style="width: 18rem; height: 18rem">
            <img src="${fakeFriend.picture.medium}" class="card-img cover" alt="..." />
            <div class="card-img-overlay" >
            <h5 class="">${fakeFriend.name.first}</h5>
            <p class="card-text"><small>Location: ${fakeFriend.location.country}</small></p>
            </div>
            </div>
            `;
        })
        photoAlbum.innerHTML = fakeFriendlisthtml
        isFakeFriends = true;
    } catch(error){
        console.log('something went wrong:', error )
    }
};



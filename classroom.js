let friendlist = JSON.parse(localStorage.getItem("friendData")) || []

realLifeFriendsBtn.onclick = () => {
    photoAlbum.innerHTML = ''
    friendlist.map((friend) => {
        photoAlbum.innerHTML += `
        <div class="card text-bg-dark col m-4" style="width: 30rem; height: 30rem;">
        <img src="${friend.photo}" class="card-img" alt="..." />
        <div class="card-img-overlay" >
            <h5 class="">${friend.name}</h5>
            <p class="card-text"><small>Location: ${friend.location}</small></p>
        </div>
        </div>
        `
    })
    friendlist = []
}

resetBtn.onclick = () => {
    photoAlbum.innerHTML = ''
    friendlist = JSON.parse(localStorage.getItem("friendData"))
}

pseudoFriendsBtn.onclick = () => {
    photoAlbum.innerHTML = ''
    axios.get('https://randomuser.me/api/?results=6')
        .then((r) => {
            console.log(r)
            let fakeFriendlist = [...r.data.results]
            fakeFriendlist.map((fakeFriend) => {
                photoAlbum.innerHTML += `
            <div class="col">
                <div class="card text-bg-dark m-4" style="width: 18rem;">
                    <img src="${fakeFriend.picture.medium}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${fakeFriend.name.first}</h5>
                        <p class="card-text"><small>Location: ${fakeFriend.location.country}</small></p>
                    </div>
                </div>
            </div>
        `
            })
        })
    friendlist = JSON.parse(localStorage.getItem("friendData"))
}



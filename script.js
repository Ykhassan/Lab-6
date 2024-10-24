const initalLike = 100;
const initialDislike = 20;

let likeCount = initalLike;
let disLikeCount = initialDislike;


// get all UI elements

const likesBtn = document.getElementById("likeBtn");
const disLikesBtn = document.getElementById("diskLikeBtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentList = document.getElementById("commentsList");

likesBtn.innerHTML = `👍 ${initalLike}`;
disLikesBtn.innerHTML = `👎 ${initialDislike}`;


// add listners on elements

likesBtn.addEventListener("click", () => {
    likesBtn.innerHTML = `👍 ${++likeCount}`;
    setCookie();
    console.log("cookie has been sat by like");

} )

disLikesBtn.addEventListener("click", () => {
    disLikesBtn.innerHTML = `👎 ${++disLikeCount}`;
    setCookie();
    console.log("cookie has been sat by dislike");

} )

submitBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = commentBox.value.trim();
    commentList.appendChild(p);
    commentBox.value = "";
    setCookie();
})

clearBtn.addEventListener("click", () => {
    console.log("in clear button")
    commentList.value = "";
    document.cookie = "voted=true; path=/; expires=" + new Date(Date.now() - 1).toUTCString();
})

function setCookie(){
    const expireOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expireOn.toUTCString();
    document.cookie = cookieString;
}

window.onload = function () {
    if(document.cookie.indexOf("voted") > -1){
        likesBtn.disabled = true;
        disLikesBtn.disabled = true;
        submitBtn.disabled = true;
    }
}






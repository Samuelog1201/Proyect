// Center ( Tweet )//

const tweetForm = document.getElementById("tweetForm") as HTMLFormElement;
const tweetContent = document.getElementById("tweetContent") as HTMLTextAreaElement;
const tweetContainer = document.getElementById("tweetContainer");

tweetForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = tweetContent.value.trim();
    if (content !== "") {
        const tweetCard = document.createElement("div");
        tweetCard.classList?.add("tweetCard");
        tweetCard.textContent = content;
        tweetContainer?.appendChild(tweetCard);
        tweetContent.value = "";
    }
});
// -------------------------------

function createTweetCard(tweetContent: string, userName: string, userAvatar: string) {
    const tweetCard = document.createElement("div");
    tweetCard.classList.add("tweetCard");

    const userDetails = document.createElement("div");
    userDetails.classList.add("userDetails");

    const userAvatarElement = document.createElement("img");
    userAvatarElement.classList.add("userAvatar");
    userAvatarElement.src = userAvatar;
    userAvatarElement.alt = "Logo del usuario";

    const userNameElement = document.createElement("span");
    userNameElement.classList.add("userName");
    userNameElement.textContent = userName;

    userDetails.appendChild(userAvatarElement);
    userDetails.appendChild(userNameElement);

    const tweetContentElement = document.createElement("p");
    tweetContentElement.classList.add("tweetContent");
    tweetContentElement.textContent = tweetContent;

    tweetCard.appendChild(userDetails);
    tweetCard.appendChild(tweetContentElement);

    return tweetCard;
}
const heartIcon = document.querySelector(".heartIcon");
const saveIcon = document.querySelector(".saveIcon");

heartIcon?.addEventListener("click", () => {
    if (heartIcon.src.includes("white")) {
        heartIcon.src = "images/heart-icon-black.png";
    } else {
        heartIcon.src = "images/heart-icon-white.png";
    }
});

saveIcon?.addEventListener("click", () => {
    if (saveIcon.src.includes("white")) {
        saveIcon.src = "images/save-icon-black.png";
    } else {
        saveIcon.src = "images/save-icon-white.png";
    }
});
import View from "./View.js";

class profileView extends View {
    _parentElement = document.querySelector(".main");
    profileLink = document.querySelector(".profile-link");
    profileHandler(handler) {
        this.profileLink.classList.add("active");
        this.profileLink.addEventListener("click", handler);
    }

    _generateMarkup() {
        return `
        <div class="profile">
        <section class="profile__nft-preview">
            <!-- <img
                src="./src/images/itachi.png"
                alt="nft image"
                class="profile__nft-preview--image"
            /> -->
        </section>
        <section class="profile__user">
            <div class="profile__user--header">
                <img
                    src="./src/images/madara.png"
                    alt="user-avi"
                    class="profile__user--image"
                />
                <div class="profile__user--details">
                    <p class="profile__user--title">
                        Adebobola Oyedunmade
                    </p>
                    <span class="profile__user--address"
                        >0x000...000</span
                    >
                </div>
            </div>
            <div class="profile__user--body">
                <div class="profile-content">
                    <span> No Content Available </span>
                </div>
            </div>
        </section>
    </div>
        `;
    }
}

export default new profileView();

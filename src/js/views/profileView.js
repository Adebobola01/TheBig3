import View from "./View.js";
import uzuImageurl from "../../../static/images/uzumakiFamily.png";
import itachiUrl from "../../../static/images/itachi.png";
import madaraUrl from "../../../static/images/madara.png";
class profileView extends View {
    _parentElement = document.querySelector(".main");
    profileLink = document.querySelector(".profile-link");
    contentBody = document.querySelector(".profile__user--body");
    profileBody = document.querySelector(".profile__user--body");
    content = "";

    profileHandler(handler) {
        this.profileLink.classList.add("active");
        this.profileLink.addEventListener("click", handler);
    }

    listHandler(handler) {
        this.profileBody.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.closest(".list")) {
                handler();
            }
        });
    }

    _generateMarkup() {
        if (!this._data) {
            this.content = `
                <div class="profile-content">
                    <span> No Content Available </span>
                </div>
            `;
        } else {
            console.log(this._data);
            this._data.forEach((n) => {
                if (n.metadata) {
                    return (this.content =
                        this.content +
                        `
                        <div class="profile__nft-container">
                            <div class="profile__nft-image">
                                <img
                                    src="${n.metadata.image}"
                                    alt="profile image"
                                />
                            </div>
                            <div class="profile__nft-details">
                                <div class="profile__nft-description">
                                    <span>${n.name} collection</span>
                                    <h3>${n.metadata.name}</h2>
                                </div>
                            </div>
                        </div>    
                    `);
                }
            });
        }

        return `
        <div class="profile">
            <div class="list__container">
                
            </div>
            <section class="profile__nft-preview">
                <div class="nft__details--preview">
                    <img
                        src="${this._data[0].metadata.image}"
                        alt="nft"
                        class="explore__nft--image"
                    />
                    <div class="explore__nft--details">
                        <p class="explore__nft--name">${this._data[0].metadata.name}</p>
                        <div class="explore__nft--price">
                            <p>23 ETH</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="profile__user">
                <div class="profile__user--header">
                    <img
                        src="${madaraUrl}"
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
                    ${this.content}
                </div>
            </section>
        </div>
        `;
    }
}

export default new profileView();

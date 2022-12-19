import View from "./View.js";
import uzuImageurl from "../../../static/images/uzumakiFamily.png";
import itachiUrl from "../../../static/images/itachi.png";
import madaraUrl from "../../../static/images/madara.png";
import ethurl from "../../../static/images/ethereum-eth-logo.svg";

class profileView extends View {
    _parentElement = document.querySelector(".main");
    profileLink = document.querySelector(".profile-link");
    contentBody = document.querySelector(".profile__user--body");
    container = document.querySelector(".profile__user");
    listContainer = document.querySelector(".list__container");
    backdrop = document.querySelector("backdrop");
    // profileBody = document.querySelector(".profile__user--body");

    content = "";
    collectionName;
    imageUrl;
    name;
    contractAddress;

    profileHandler(handler) {
        this.profileLink.classList.add("active");
        this.profileLink.addEventListener("click", handler);
    }

    getListingDetails() {
        const price = document.querySelector(".list__price--input").value;
        const durationValue = document.querySelector(
            ".list__duration--input"
        ).value;
        const durationUnit = document.querySelector(
            ".list__duration--select"
        ).value;
        return {
            price: price,
            collection: this.collectionName,
            imageUrl: this.imageUrl,
            contractAddress: this.contractAddress,
            durationValue: durationValue,
            durationUnit: durationUnit,
            name: this.name,
        };
    }

    changePreview(handler) {
        
        this._parentElement.addEventListener("click", (e) => {
            if (!e.target.closest("profile__nft-container")){
                return
            }
            console.log('here')
            const nft = e.target.closest(".profile__nft-container");
            this.name = nft.dataset.name;
            this.imageUrl = nft.dataset.image;
            this.contractAddress = nft.dataset.contractaddress;
            this.collectionName = nft.dataset.collection;
            const markup = `
            <div class="nft__details--preview">
            <img
            src="${this.imageUrl}"
            alt="nft"
            class="explore__nft--image"
                    />
                    <div class="explore__nft--details">
                    <p class="explore__nft--name">${this.name}</p>
                        <div class="explore__nft--price">
                        <p>23 ETH</p>
                        </div>
                        </div>
                        </div>
            `
            this._parentElement.querySelector(".profile__nft-preview").innerHTML = markup
            handler()
        })
    }

    listNFT(handler) {
        this._parentElement.addEventListener("click", (e) => {
            if (!e.target.closest(".list-btn")) {
                return;
            }
            handler();
        });
    }

    closeListHandler(handler) {
        this._parentElement.addEventListener("click", (e) => {
            e.preventDefault();
            if (!e.target.closest(".list-close")) {
                return;
            }
            handler();
        });
    }

    openListContainer() {
        document
            .querySelector(".list__container")
            .classList.toggle("open-list");
    }
    showListHandler(handler) {
        this._parentElement.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.closest(".profile__nft-container")) {
                const nft = e.target.closest(".profile__nft-container");
                this.name = nft.dataset.name;
                this.imageUrl = nft.dataset.image;
                this.collectionName = nft.dataset.collection;
                const markup2 = `
                <div class="nft__details--preview">
                <img
                src="${this.imageUrl}"
                alt="nft"
                class="explore__nft--image"
                        />
                        <div class="explore__nft--details">
                        <p class="explore__nft--name">${this.name}</p>
                            <div class="explore__nft--price">
                            <p>23 ETH</p>
                            </div>
                            </div>
                            </div>
                `
                this._parentElement.querySelector(".profile__nft-preview").innerHTML = markup2
            }
            if (!e.target.closest(".list-cta")) {
                return;
            }
            const nft = e.target.closest(".profile__nft-container");
            this.name = nft.dataset.name;
            this.imageUrl = nft.dataset.image;
            this.contractAddress = nft.dataset.contractaddress;
            this.collectionName = nft.dataset.collection;
            const markup = `
                <img src="${this.imageUrl}" class="list-preview__image">
                <div class="list-preview__details">
                    <span>${this.collectionName} collection</span>
                    <h3>${this.name}</h3>
                </div>
            `;
            document.querySelector(".list-preview").innerHTML = markup;
            handler();
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
                        <div class="profile__nft-container" data-name="${n.metadata.name}" data-image="${n.metadata.image}" data-contractAddress="${n.tokenAddress}" data-collection="${n.name}">
                            <p class="list-cta">+</p>
                            <div class="profile__nft-image">
                            <img
                                    src="${n.metadata.image}"
                                    alt="profile image"
                                />
                                </div>
                                <div class="profile__nft-details">
                                <div class="profile__nft-description">
                                    <span>${n.name} collection</span>
                                    <h3>${n.metadata.name}</h3>
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
                <span class="list-close">X</span>
                <div class="list-preview">
                    
                </div>
                <div class="list__price">
                    <p>Price</p>
                    <div class="list__price-container"> 
                        <input class="list__price--input" placeholder="Amount" type="number"></input>
                        <img src="${ethurl}">
                    </div>
                </div>
                <div class="list__price">
                <p>Duration</p>
                <div class="list__price-container"> 
                    <input class="list__duration--input" placeholder="24" type="number"></input>
                    <select name="duration" id="duration" class="list__duration--select">
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                </div>
                </div>
                <button class="list-btn">List</button>
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

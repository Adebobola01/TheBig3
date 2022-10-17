import View from "./View.js";

class heroView extends View {
    _parentElement = document.querySelector(".hero__nft-container");

    _generateMarkup() {
        return `
            <div class="hero__nft-image">
                <img
                    src="${this._data.image}"
                    alt="hero image"
                />
            </div>
            <div class="hero__nft-details">
                <img
                    src="./src/images/itachi.png"
                    alt="creator icon"
                />
                <div class="hero__nft-description">
                    <h3>${this._data.name}</h2>
                    <span>Floor: 0.25 ETH</span>
                </div>
            </div>
        `;
    }
}

export default new heroView();

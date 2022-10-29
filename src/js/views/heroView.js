import View from "./View.js";
import uzuImageurl from "../../../static/images/uzumakiFamily.png";
import itachiUrl from "../../../static/images/itachi.png";
import madaraUrl from "../../../static/images/madara.png";

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
                    src="${itachiUrl}"
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

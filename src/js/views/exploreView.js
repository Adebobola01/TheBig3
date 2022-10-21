import View from "./View.js";

class exploreView extends View {
    _parentElement = document.querySelector(".main");
    exploreLink = document.querySelector(".explore-link");
    exploreHandler(handler) {
        this.exploreLink.addEventListener("click", handler);
    }

    detailViewHandler(handler) {
        this._parentElement.addEventListener("click", (e) => {
            if (e.target.closest(".explore__nft--container")) {
                handler();
            }
        });
    }

    _generateMarkup() {
        return `
        <div class="explore__container scrollbar">
        <div class="explore__sort">
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
        </div>
        <div class="explore__main">
            <div class="scroll-down">
                <span>>></span>
            </div>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="./src/images/uzumakiFamily.png"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="./src/images/itachi.png"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
        `;
    }
}

export default new exploreView();

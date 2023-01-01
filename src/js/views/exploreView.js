import View from "./view.js";
import uzuImageurl from "../../../static/images/uzumakiFamily.png";
import itachiUrl from "../../../static/images/itachi.png";

class exploreView extends View {
    _parentElement = document.querySelector(".main");
    exploreCta = document.querySelector(".explore-cta");
    exploreLink = document.querySelectorAll(".explore-link");
    exploreHandler(handler) {
        this.exploreLink.forEach(btn => {
            btn.addEventListener("click", handler);
        })
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${itachiUrl}"
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

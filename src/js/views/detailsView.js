import View from "./View";
import uzuImageurl from "../../../static/images/uzumakiFamily.png";
import itachiUrl from "../../../static/images/itachi.png";
import madaraUrl from "../../../static/images/madara.png";

class detailsView extends View {
    _parentElement = document.querySelector(".main");

    _generateMarkup() {
        return `
        <div class="nft">
        <section class="profile__nft-preview">
            <div class="nft__details--preview">
                <img
                    src="${uzuImageurl}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="nft__details">
            <div class="nft__details--heading">
                <a href="#" class="nft__details--collection">Azuki</a>
                <h3 class="nft___details--name">Azuki #25</h3>
                <p class="nft__details--owner">
                    Owned by <a href="#">Adebobola</a>
                </p>
            </div>
            <div class="purchase">
                <p>Current Price</p>
                <span>0.2 ETH</span>
                <div class="purchase__btns">
                    <button class="purchase__btn buy-btn">BUY</button>
                    <button class="purchase__btn offer-btn">
                        Make Offer
                    </button>
                </div>
            </div>
            <div class="nft__details--body">
                <div class="description">
                    <h2>Description</h2>
                    <div class="description__body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime mollitia, molestiae
                            quas vel sint commodi repudiandae
                            consequuntur voluptatum laborum numquam
                            blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque
                            rerum! Provident similique accusantium nemo
                            autem. Veritatis obcaecati tenetur iure eius
                            earum ut molestias architecto voluptate
                            aliquam nihil, eveniet aliquid culpa officia
                            aut! Impedit sit sunt quaerat, odit, tenetur
                            error, harum nesciunt ipsum debitis quas
                            aliquid. Reprehenderit,
                        </p>
                    </div>
                </div>
                <div class="properties">
                    <h2>Properties</h2>
                    <div class="properties__body">
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <h2>Details</h2>
                    <div class="details__body">
                        <div class="detail">
                            <span>Contract Address</span>
                            <span>0x23...8e90</span>
                        </div>
                        <div class="detail">
                            <span>Token ID</span>
                            <span>25</span>
                        </div>
                        <div class="detail">
                            <span>Chain</span>
                            <span>Goerli</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `;
    }
}

export default new detailsView();

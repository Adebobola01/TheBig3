import View from "./View.js";

class WalletView extends View {
    _parentElement = document.querySelector(".wallets");
    metaWallet = document.querySelector(".metamask__btn");
    connectBtn = document.querySelector(".connect__wallet--btn");
    walletContainer = document.querySelector(".wallet__container");
    backdrop = document.querySelector(".backdrop");
    btnContainer = document.querySelector(".btn__container");

    toggle() {
        this.walletContainer.classList.toggle("hidden");
        this.backdrop.classList.toggle("hidden");
    }

    WalletsHandler(handler1, handler2) {
        this.connectBtn.addEventListener("click", function () {
            handler1();
        });
        this.metaWallet.addEventListener("click", function () {
            handler2();
        });
    }

    displayAddress(address) {
        this.btnContainer.innerHTML = `${address.slice(0, 3)}...${address.slice(
            -4
        )}`;
    }
}

export default new WalletView();

import View from "./View.js";

class WalletView extends View {
    _parentElement = document.querySelector(".wallets");
    metaWallet = document.querySelector(".metamask__btn");
    connectBtn = document.querySelector(".connect__wallet--btn");
    walletContainer = document.querySelector(".wallet__container");
    backdrop = document.querySelector(".backdrop");
    btnContainer = document.querySelector(".btn__container");

    toggle() {
        this.walletContainer.classList.toggle("open-wallets");
        this.backdrop.classList.toggle("open");
    }

    // showWallets() {
    //     this.walletContainer.classList.
    // }

    WalletsHandler(handler1, handler2) {
        this.connectBtn.addEventListener("click", function () {
            handler1();
        });
        this.metaWallet.addEventListener("click", function () {
            handler2();
        });
        this.backdrop.addEventListener("click", function () {
            handler1();
        });
    }

    displayAddress(isConnected, address) {
        if (address && isConnected) {
            this.btnContainer.style.background = "transparent";
            this.btnContainer.innerHTML = `${address.slice(
                0,
                3
            )}...${address.slice(-4)}`;
        }
    }
}

export default new WalletView();

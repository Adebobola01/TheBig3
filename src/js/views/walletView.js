import View from "./view.js";

class WalletView extends View {
    _parentElement = document.querySelector(".wallets");
    metaWallet = document.querySelector(".metamask__btn");
    connectBtn = document.querySelector(".connect__wallet--btn");
    walletContainer = document.querySelector(".wallet__container");
    backdrop = document.querySelector(".backdrop");
    btnContainer = document.querySelector(".btn__container");
    logoutBtn = document.querySelector(".logout-btn");
    addrContainer = document.querySelector(".addr-container");

    toggle() {
        this.walletContainer.classList.toggle("open-wallets");
        this.backdrop.classList.toggle("open");
    }

    logoutHandler(handler) {
        this.logoutBtn.addEventListener("click", handler);
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
        console.log("addr disp");
        if (address && isConnected) {
            console.log("dis addr2");
            this.connectBtn.classList.add("hidden");
            this.btnContainer.classList.add("connected");
            this.addrContainer.textContent = `${address.slice(
                0,
                3
            )}...${address.slice(-4)}`;
            this.logoutBtn.classList.remove("hidden");
        }
    }

    displayConnectBtn() {
        this.addrContainer.textContent = "";
        this.btnContainer.classList.remove("connected");
        this.connectBtn.classList.remove("hidden");
        this.logoutBtn.classList.add("hidden");
    }
}

export default new WalletView();

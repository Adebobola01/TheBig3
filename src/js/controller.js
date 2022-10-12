import * as model from "./model.js";
import walletView from "./views/walletView.js";

const controlDisplayWallet = async function () {
    try {
        walletView.toggle();
    } catch (error) {
        console.log(error);
    }
};

const controlConnectWallet = async function () {
    try {
        await model.getUserAccount();
        await model.verifyMessage();
        walletView.toggle();
        walletView.displayAddress(model.state.address);
    } catch (error) {
        console.log(error);
    }
};

const controlConnected = async function () {
    try {
        if (model.state.isConnected) {
            walletView.displayAddress(model.state.address);
        }
    } catch (error) {
        console.log(error);
    }
};

const init = function () {
    walletView.WalletsHandler(controlDisplayWallet, controlConnectWallet);
    controlConnected();
};

init();

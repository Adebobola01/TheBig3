import * as model from "./model.js";
import walletView from "./views/walletView.js";
import heroView from "./views/heroView.js";
import profileView from "./views/profileView.js";
import exploreView from "./views/exploreView.js";
import detailsView from "./views/detailsView.js";

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

const controlHero = async function () {
    try {
        const data = await model.getHeroData();
        const link = data.image.split("//")[1];
        console.log(link);
        data.image = `https://ipfs.moralis.io:2053/ipfs/${link}`;
        heroView.render(data);
    } catch (error) {
        console.log(error);
    }
};

const controlProfile = async function () {
    try {
        profileView.render();
    } catch (error) {
        console.log(error);
    }
};

const controlExplore = async function () {
    try {
        exploreView.render();
    } catch (error) {
        console.log(error);
    }
};

const controlDetailView = async function () {
    try {
        detailsView.render();
    } catch (error) {
        console.log(error);
    }
};

const init = function () {
    walletView.WalletsHandler(controlDisplayWallet, controlConnectWallet);
    controlConnected();
    controlHero();
    profileView.profileHandler(controlProfile);
    exploreView.exploreHandler(controlExplore);
    exploreView.detailViewHandler(controlDetailView);
};

init();

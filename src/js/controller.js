import * as model from "./model.js";
import walletView from "./views/walletView.js";
import heroView from "./views/heroView.js";
import profileView from "./views/profileView.js";
import exploreView from "./views/exploreView.js";
import detailsView from "./views/detailsView.js";
import * as utils from "./helpers.js";

const token = localStorage.getItem("token");
const expiryDate = localStorage.getItem("expiryDate");
const address = localStorage.getItem("address");

///initial state

if (module.hot) {
    module.hot.accept();
}

const controlInitialState = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.code) {
        model.state.authCode = params.code;
        const authType = localStorage.getItem("authType");
        console.log(authType)
        model.googleCode()
    }
    ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x5") {
            window.location.reload();
        }
        console.log("please connect to the Goerli network!");
    });
    const stillValid = () => {
        if (new Date(expiryDate) > new Date()) {
            return true;
        } else {
            return false;
        }
    };

    if (token && stillValid) {
        model.state.isConnected = true;
        model.state.user.address = address;
        walletView.displayAddress(
            model.state.isConnected,
            model.state.user.address
        );
    }
    model.setAutoLogout(new Date(expiryDate) - new Date());
};

const controlDisplayWallet = function () {
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
        walletView.displayAddress(
            model.state.isConnected,
            model.state.user.address
        );
        walletView.toggle();
    } catch (error) {
        console.log(error);
    }
};

const controlAuth = async function () {
    try {
        localStorage.setItem("authType", "login")
        const result = await model.googleAuth();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

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
        data.image = utils.getImage(data.image);
        heroView.render(data);
    } catch (error) {
        console.log(error);
    }
};

const controlProfile = async function () {
    try {
        if (!model.state.isConnected) {
            profileView.renderError("You must connect first!")
        }
        await model.getUserData();
        profileView.render(model.state.user.nfts);
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

const controlLogout = async () => {
    try {
        model.logoutHandler();
        walletView.displayConnectBtn();
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};

const controlShowList = () => {
    profileView.openListContainer();
};
const controlCloseList = () => {
    profileView.openListContainer();
};

const controlPreview = () => {
    profileView.preview()
}

const controlProfilePreview = () => {
    profileView.changePreview();
}

const controlList = async () => {
    console.log(model.state);
    const listValues = profileView.getListingDetails();
    await model.list(listValues);
    profileView.openListContainer();
};

const init = function () {
    controlInitialState();
    walletView.WalletsHandler(controlDisplayWallet, controlConnectWallet, controlAuth);
    walletView.logoutHandler(controlLogout);
    controlConnected();
    controlHero();
    controlProfilePreview()
    exploreView.exploreHandler(controlExplore);
    exploreView.detailViewHandler(controlDetailView);
    profileView.profileHandler(controlProfile);
    profileView.showListHandler(controlShowList);
    profileView.listNFT(controlList);
    profileView.closeListHandler(controlCloseList);
};

init();

const web3 = new Web3(Web3.givenProvider);

export const state = {
    message: "",
    signature: "",
    isConnected: false,
};
const remainingMilliseconds = 180 * 60 * 1000;

export const loadNft = async (id) => {};

const logoutHandler = () => {
    state.isConnected = false;
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
};

const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
        logoutHandler();
    }, milliseconds);
};

const setToStorage = (token, userId, address) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("address", address);

    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());
};

export const getUserAccount = async () => {
    try {
        const chainId = await ethereum.request({ method: "eth_chainId" });
        console.log(chainId);
        if (chainId !== "0x5") {
            return console.log("Please connect to the goerli network!");
        }

        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const result = await fetch("http://localhost:3000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: account,
            }),
        });
        const json = await result.json();
        state.message = json.message;
        state.signature = await web3.eth.personal.sign(state.message, account);
    } catch (error) {
        console.log(error);
    }
};

export const verifyMessage = async () => {
    try {
        if (state.message && state.signature) {
            const result = await fetch("http://localhost:3000/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    signature: state.signature,
                    message: state.message,
                }),
            });
            if (result.status === 200 || res2.status === 201) {
                state.isConnected = true;
                const verified = await result.json();
                state.address = verified.address;
                console.log(verified);
                setToStorage(verified.token, verified.userId, verified.address);
                setAutoLogout(remainingMilliseconds);
            }
        } else {
            return console.log("could not connect to wallet");
        }
    } catch (error) {
        console.log(error);
    }
};

export const getHeroData = async () => {
    try {
        const result = await fetch("http://localhost:3000/heroNFT", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await result.json();
        return JSON.parse(data.data);
    } catch (error) {
        console.log(error);
    }
};

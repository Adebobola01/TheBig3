const web3 = new Web3(Web3.givenProvider);
import * as utils from "./helpers.js";

export const state = {
    message: "",
    signature: "",
    isConnected: false,
    user: {
        address: "",
        nfts: [],
    },
};
const remainingMilliseconds = 180 * 60 * 1000;

export const loadNft = async (id) => {};

export const logoutHandler = () => {
    state.isConnected = false;
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    localStorage.removeItem("address");
};

const getToken = () => {
    return localStorage.getItem("token");
};

export const setAutoLogout = (milliseconds) => {
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
        const result = await fetch("https://big3-backend.onrender.com/message", {
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
            const result = await fetch("https://big3-backend.onrender.com/verify", {
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
                state.user.address = verified.address;
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
        const result = await fetch("https://big3-backend.onrender.com/heroNFT", {
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

export const getUserData = async () => {
    const result = await fetch("https://big3-backend.onrender.com/profile", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + getToken(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userAddress: state.user.address,
        }),
    });
    const { data } = await result.json();
    data.forEach((n) => {
        if (!n.metadata) {
            return;
        }
        n.metadata.image = utils.getImage(n.metadata.image);
    });
    state.user.nfts = data;
};

export const list = async (values) => {
    const list = await fetch("https://big3-backend.onrender.com/list", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + getToken(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contractAddr: values.contractAddress,
            imageUrl: values.imageUrl,
            collection: values.collection,
            name: values.name,
            price: values.price,
            durationValue: values.durationValue,
            durationUnit: values.durationUnit,
        }),
    });
    console.log(await list.json());
};

export const oauthSignIn = async () => {
    // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '52168821352-4sc11trj4qtq95051mrnrbinfgmla3ai.apps.googleusercontent.com',
  'redirect_uri': 'https://big3.onrender.com/',
  'response_type': 'token',
  'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }
  
  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
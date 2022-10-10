export const state = {
    message: "",
    signature: "",
};

export const loadNft = async (id) => {};

export const getUserAccount = async () => {
    try {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const result = await fetch("http://localhost:8080/message", {
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
        state.signature = await web3.eth.personal.sign(message, account);
    } catch (error) {
        console.log(error);
    }
};

export const verifyMessage = async () => {
    try {
        const result = await fetch("http://localhost:8080/verify", {
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
            const verified = await result.json();
            console.log(verified);
        }
    } catch (error) {
        console.log(error);
    }
};

connect.addEventListener("click", async () => {
    try {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        console.log(account);
        const result = await fetch("http://localhost:8080/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: account,
            }),
        });
        const json = await result.json();
        const message = json.message;
        const signature = await web3.eth.personal.sign(message, account);

        const res2 = await fetch("http://localhost:8080/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                signature: signature,
                message: message,
            }),
        });
        if (res2.status === 200 || res2.status === 201) {
            const verified = await res2.json();
            console.log(verified);
        }
    } catch (error) {
        console.log("call error =>", error);
    }
});

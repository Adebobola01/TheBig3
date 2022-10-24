export const getImage = (image) => {
    if (!image) {
        return;
    }
    const link = image.split("//")[1];
    return `https://ipfs.moralis.io:2053/ipfs/${link}`;
};

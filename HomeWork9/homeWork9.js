const conteiner = document.getElementById('blocks');
const numberBlocks = 25;

const generateBlocks = () => {
    conteiner.innerText = '';
    const arrayColorR = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    const arrayColorG = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    const arrayColorB = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    for (i = 0; i < numberBlocks; i++) {
        const block = document.createElement('div');
        conteiner.prepend(block);
        block.className = ('block');
        block.style.backgroundColor = '#' + arrayColorR[i].toString(16) + arrayColorG[i].toString(16) + arrayColorB[i].toString(16);
    }
}
const generateBlocksInterval = () => {
    setInterval(() => {
        generateBlocks()
    }, 1000);
}

generateBlocksInterval();

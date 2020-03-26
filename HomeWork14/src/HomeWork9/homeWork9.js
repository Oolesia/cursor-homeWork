const numberBlocks = 25;

export function generateBlocks(){
    document.getElementById('blocks').innerText = '';
    const arrayColorR = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    const arrayColorG = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    const arrayColorB = window.crypto.getRandomValues(new Uint8Array(numberBlocks));
    for (let i = 0; i < numberBlocks; i++) {
        const block = document.createElement('div');
        document.getElementById('blocks').prepend(block);
        block.className = ('block');
        block.style.backgroundColor = '#' + arrayColorR[i].toString(16) + arrayColorG[i].toString(16) + arrayColorB[i].toString(16);
    }
}



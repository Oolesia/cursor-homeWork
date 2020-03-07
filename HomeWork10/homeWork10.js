function addSound(elenent) {
    const letterSoundObj = {
        a: 'button-digital',
        s: 'button-pop',
        d: 'button-tonal',
        f: 'car-alarm',
        g: 'chime-alarm',
        h: 'gjsihked',
    }
    const letterElement = document.getElementById('letter-' + elenent)
    if (letterElement) {
        var audioElement = new Audio('sound/' + letterSoundObj[elenent] + '.mp3')
        audioElement.play();
        letterElement.style.backgroundColor = 'darkslategrey';
        setTimeout(function () {
            letterElement.style.backgroundColor = 'lightslategrey'
        }, 400)
    }
}

document.addEventListener('keydown', function (event) {
    const letter = event.key;
    addSound(letter);
})

const block = document.querySelectorAll('.letters');
block.forEach(element => {
    element.addEventListener("click", function () {
        const letter = this.innerText;
        addSound(letter);
    });
})

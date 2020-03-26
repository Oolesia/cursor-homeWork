const fontSize = document.getElementById('font14');
const fontSizeUp = document.getElementById('font-up');
const fontSizeDown = document.getElementById('font-down');
const content = document.getElementById('main-content');

export default function* createIdGenerator() {
    let i = 1;
    while (true) {
        console.log(i++);
        yield;
    }
}







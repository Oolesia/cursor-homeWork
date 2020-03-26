function getChinese(str) {
    const time = 50;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(String.fromCharCode(str));
        }, time);
    })
}
export default async function getRandomChinese(length) {
    const n = 5;
    let result = '';
    while (length > 0) {
        let str = '';
        const sign = Date.now().toString();
        for (let i = sign.length - n; i < sign.length; i++) {
            str += sign[i];
        }
        result += await getChinese(str);
        length--;
    }
    return new Promise((resolve) => {
        resolve(result);
    })
}
getRandomChinese(4).then((res) => {
    //console.log(res);
});

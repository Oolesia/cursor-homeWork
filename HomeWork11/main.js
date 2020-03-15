function chinese(str){
    const time = 50;
    return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(String.fromCharCode(str));
    }, time);
    })
}
async function getRandomChinese(length){
    const n = 5;
    let result ='';
        while(length>0){
        let str='';
        const sign = Date.now().toString();
        for (let i = sign.length - n; i < sign.length; i++) {
            str += sign[i];
        }
        result+= await chinese(str);
        length--;
    }
    console.log(result);
}
getRandomChinese(6);
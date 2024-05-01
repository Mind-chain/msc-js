const {convertWmindTomind} = require('msc-js');


async function wm2m (){
    let privatekey = '0x0c7dee41c5d202fa97708a35afcdb5b2f8e65d0d968f7a882a0263463ccc12d6';
let amount = 2;
    try{
        const txn = await convertWmindTomind(privatekey , amount) ; return
       
    }catch(e){
        console.log(e)
    }
}

wm2m()
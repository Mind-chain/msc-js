const {convertWmindTomind} = require('msc-js');


async function wm2m (){
    let privatekey = '';
let amount = 2;
    try{
         await convertWmindTomind(privatekey , amount) ; return
       
    }catch(e){
        console.log(e)
    }
}

wm2m()
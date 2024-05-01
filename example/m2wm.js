const {convertMINDToWMIND} = require('msc-js');

async function m2wm(){
let privatekey = '';
let amount = 2;
try {
    const txn = await convertMINDToWMIND(privatekey, amount); return
}catch (err) {
    console.log(err);
}

}

m2wm()
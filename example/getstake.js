const {getstake} = require('msc-js');

async function getstakedCoin() {
    try {
        const stake = await getstake();
        console.log(stake); 
        return stake; 
    } catch (err) {
        console.error(err); 
        throw err; 
    }
}

getstakedCoin()
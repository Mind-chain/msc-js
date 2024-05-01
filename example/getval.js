const { getValidators } = require('msc-js');

async function getval() {
    try {
        const validators = await getValidators();
        console.log(validators); 
        return validators; 
    } catch (err) {
        console.error(err); 
        throw err; 
    }
}

getval();

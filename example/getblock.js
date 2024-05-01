const { get_block } = require("msc-js");

async function fetchData() {
    try {
        const blockData = await get_block(211);
        console.log(blockData);
    } catch (error) {
        console.error('Error fetching block data:', error);
    }
}

fetchData();

interface rpc {
    ws: string;
    http: string;
}

const mainnet_rpc: rpc = {
    ws: 'wss://seednode.mindchain.info/ws',
    http: 'https://seednode.mindchain.info' || 'https://mind-smart-chain.rpc.thirdweb.com' || 'https://rpc-msc.mindchain.info'
};

const testnet_rpc: rpc = {
    ws: 'wss://testnet-msc.mindchain.info/ws',
    http: 'https://testnet-msc.mindchain.info'
};

export {mainnet_rpc, testnet_rpc}
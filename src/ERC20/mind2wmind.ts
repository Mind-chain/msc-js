import { mainnet_rpc } from "../constants";
import { WMIND } from "../constants/abies/WMIND";
import { ethers } from "ethers";
import contracts from "../constants/contracts";

export async function convertMINDToWMIND(privateKey: string, amount: number): Promise<void> {
    
     const provider  = new ethers.JsonRpcProvider(mainnet_rpc.http)
    // Connect wallet
    const wallet = new ethers.Wallet(privateKey, provider );


    const wmindContract = new ethers.Contract(contracts.WMIND_ADDRESS, WMIND, wallet);

    // Convert MIND to WMIND
    const ethAmount = ethers.parseEther(amount.toString()); 
    const overrides = {
        value: ethAmount // Amount of WMIND to wrap
    };
    const tx = await wmindContract.deposit(overrides); // Deposit MIND and get WMIND in return
    await tx.wait(); // Wait for transaction to be confirmed
}

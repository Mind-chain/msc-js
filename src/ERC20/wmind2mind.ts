import { mainnet_rpc } from "../constants";
import { WMIND } from "../constants/abies/WMIND";
import { ethers } from "ethers";
import contracts from "../constants/contracts";
// reverse func to unworp wmind 
export async function convertWmindTomind(privateKey: string, amount: number): Promise<void> {

    const provider = new ethers.JsonRpcProvider(mainnet_rpc.http);

    const wallet = new ethers.Wallet(privateKey, provider);


    const wethContract = new ethers.Contract(contracts.WMIND_ADDRESS, WMIND, wallet);


    const wethAmount = ethers.parseEther(amount.toString());
    const tx = await wethContract.withdraw(wethAmount);
    await tx.wait(); // Wait for transaction to be confirmed
    console.log("WMIND unwrapped");
}

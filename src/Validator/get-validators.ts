import contracts from "../constants/contracts";
import { mainnet_rpc } from "../constants";
import { STAKING} from "../constants/abies/STAKING";
import { ethers } from "ethers";


export async function getValidators(): Promise<void> {
    new ethers.Contract(
        contracts.STAKING_ADDRESS,
        STAKING,
        {
            provider: new ethers.JsonRpcProvider(mainnet_rpc.http)
        }
    );
}


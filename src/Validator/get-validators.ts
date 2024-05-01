import contracts from "../constants/contracts";
import { mainnet_rpc } from "../constants";
import { STAKING} from "../constants/abies/STAKING";
import { ethers } from "ethers";


export async function getValidators(): Promise<void> {
   const vals =  new ethers.Contract(
        contracts.STAKING_ADDRESS,
        STAKING,
        {
            provider: new ethers.JsonRpcProvider(mainnet_rpc.http)
        }
    );
    const validators = await vals.validators();

    return validators;

}


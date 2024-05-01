import axios from "axios";
import { explorer } from "../constants";

export  function get_block (block:number){
    return axios.get(`${explorer.base}/blocks/${block}`)
}


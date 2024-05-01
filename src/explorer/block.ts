import axios from "axios";
import { explorer } from "../constants";

export async function get_block(block: number) {
    try {
        const response = await axios.get(`${explorer.base}/blocks/${block}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching block data:', error);
        throw error;
    }
}

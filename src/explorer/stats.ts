import axios from "axios";
import { explorer } from "../constants";

async function getStats() {
  try {
    const response = await axios.get(explorer.base);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Optional: re-throw the error if needed
  }
}

export { getStats };

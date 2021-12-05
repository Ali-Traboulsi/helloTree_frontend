import axios from "axios";
import { API_URL } from "../utils/Constant";

export const register = async (data) => {
    const results = await axios.post(`${API_URL}register`, data);
    console.log(results);
    // setState(results.data);
}

export const login = async (data) => {
    const success = await axios.post(`${API_URL}login`, data);
    console.log(success);
    if (success.status === 200 && success.data.access_token) {
        localStorage.setItem("ACCESS_TOKEN", success.data.access_token);
        localStorage.setItem("name", success.data.user.name);
        localStorage.setItem("name", success.data.user.email);
    }
    return success.data;

}

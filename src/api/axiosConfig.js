import axios from "axios";

export default axios.create({
    baseURL: 'https://moviebackend-production.up.railway.app',
    // headers: {"Access-Control-Allow-Origin": "*"}
})
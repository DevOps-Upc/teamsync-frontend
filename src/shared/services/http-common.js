import axios from "axios";

const URL_BASE = 'http://localhost:3000'
const http = axios.create({

    baseURL: URL_BASE,
    header: {'Content-type':'application/json'}
});




export default http;
import axios from "axios";

const URL_BASE = 'http://localhost:3000/api/v1'
const http = axios.create({

    baseUrl: URL_BASE,
    header: {'Content-type':'application/json'}
});




export default http;
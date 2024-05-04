import axios from "axios";

const URL_BASE = 'https://my-json-server.typicode.com/Brays83/TeamSync-Api-Fake'
const http = axios.create({

    baseURL: URL_BASE,
    header: {'Content-type':'application/json'}
});




export default http;
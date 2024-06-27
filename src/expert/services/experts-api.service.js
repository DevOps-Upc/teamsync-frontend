import http from "../../shared/services/http-common.js";
import axios from "axios";

export class ExpertsApiService {
    getAllExperts(){
        return http.get('/experts');
    }
    getExpertById(id){
        return http.get(`/experts/${id}`);
    }
    getRequests() {
        return axios.get('http://localhost:3000/requests');
    }
}
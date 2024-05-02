import http from "../../shared/services/http-common.js";

export class ExpertsApiService {
    getAllExperts(){
        return http.get('/experts');
    }
    getExpertById(id){
        return http.get(`/experts/${id}`);
    }
}
import http from "../../shared/services/http-common.js"
export class ProyectApiService {
    getAllTask(id){
        return http.get(`/tasks?id_project=${id}`);
    }
    getAllFiles(id){
        return http.get(`/files?id_project=${id}`)
    }
    getAllComments(id){
        return http.get(`/comments?id_project=${id}`);
    }

    getAllIntegrate(id){
        return http.get(`/integrates?id_project=${id}`);
    }

    getProject(id){
        return http.get(`/projects/${id}`);
    }

    getAllProjectsByIdUser(id){
        return http.get(`/projects?id_user=${id}`)
    }

    createTask(taskResource){
        return http.post('/tasks',taskResource)
    }
}
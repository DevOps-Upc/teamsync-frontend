import {createRouter, createWebHistory} from "vue-router"
import HomeProyectComponent from "../proyect/pages/home-proyect.component.vue";
import TasksProyectComponent from "../proyect/pages/tasks-proyect.component.vue";
let  id;
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/id/home`,component: HomeProyectComponent, meta:{title:'Home'}},
        {path:`/id/tasks`,component:TasksProyectComponent,meta:{title:'Tasks'}}


    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'DevOps TeamSync';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
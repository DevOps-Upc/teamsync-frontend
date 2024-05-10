import {createRouter, createWebHistory} from "vue-router"
import HomeProyectComponent from "../proyect/pages/home-proyect.component.vue";
import TasksProyectComponent from "../proyect/pages/tasks-proyect.component.vue";
import ExpertsComponent from "../expert/pages/experts.component.vue";
import MembersProyectComponent from "../proyect/pages/members-proyect.component.vue";
let  id;
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:`/id/home`,component: HomeProyectComponent, meta:{title:'Home'}},
        {path:`/id/tasks`,component:TasksProyectComponent,meta:{title:'Tasks'}},
        {path:`/id/experts`,component:ExpertsComponent,meta:{title:'Experts'}},
        {path:'/id/members',component:MembersProyectComponent}


    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'DevOps TeamSync';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
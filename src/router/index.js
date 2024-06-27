import {createRouter, createWebHistory} from "vue-router"
import TasksProyectComponent from "../proyect/pages/tasks-proyect.component.vue";
import ExpertsComponent from "../expert/pages/experts.component.vue";
import MembersProyectComponent from "../proyect/pages/members-proyect.component.vue";
import HomeComponent from "../public/pages/home.component.vue";
import LibraryComponent from "../library/pages/library.component.vue";
import LoginComponent from "../account/pages/login.component.vue";
import LogoutComponent from "../account/pages/logout.component.vue";
import NotFoundComponent from "../public/pages/not.found.component.vue";
import HomeProyectComponent from "../proyect/pages/home-proyect.component.vue";
import LayoutComponent from "../proyect/pages/layout.component.vue";

let id;
const router = createRouter({
    history: createWebHistory(),
    routes: [

        {path:`/project/:id`,component:LayoutComponent,children:[
                {path: "", redirect:"home"},
                {path:`home`,component: HomeProyectComponent, meta:{title:'HomeProject'} ,name:'myProject'},
                {path:`tasks`,component:TasksProyectComponent,meta:{title:'Tasks'}},
                {path:`experts`,component:ExpertsComponent,meta:{title:'Experts'}},
                {path:'members',component:MembersProyectComponent, meta:{title:'Members'}}
            ]},

        {path:'/home',component:HomeComponent,meta:{title:'HomePublic'}},

        {path:`/tasks`,component:TasksProyectComponent,meta:{title:'Tasks'}},
        {path:`/experts`,component:ExpertsComponent,meta:{title:'Experts'}},
        {path:'/members',component:MembersProyectComponent, meta:{title:'Members'}},
        {path:'/library',component:LibraryComponent, meta:{title:'Me llegan al huevo'}},
        {path:'/login',component:LoginComponent, meta:{title:'Iniciar Sesión'}},
        {path:'/logout',component:LogoutComponent, meta:{title:'Cerrar Sesión'}},
        {path: "", redirect: "/login" },
        {path:'/not-found',component:NotFoundComponent, meta:{title:'404 Error'}},
        {path: "/:catchAll(.*)", redirect: "/not-found" },
    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'DevOps TeamSync';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
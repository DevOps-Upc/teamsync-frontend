import {createRouter, createWebHistory} from "vue-router"
import HomeProyectComponent from "../proyect/pages/home-proyect.component.vue";
import LoginCard from "../login/pages/login-card.vue";
let  id;
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:`/id/home`,
            component: HomeProyectComponent,
            meta:{title:'Home'}
        },
        {
            path:'/login',
            name: 'login',
            component: LoginCard,
        }

    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'DevOps TeamSync';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
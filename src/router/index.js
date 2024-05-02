import {createRouter, createWebHistory} from "vue-router"
import HomeProyectComponent from "../proyect/pages/home-proyect.component.vue";
import LoginCard from "../login/pages/login-card.vue";
import RegisterCardComponent from "../register/pages/register-card.component.vue";
let  id;
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
        },
        {
            path:'/register',
            name: 'register',
            component: RegisterCardComponent,
        }

    ]

})

router.beforeEach((to, from, next) =>{
    let baseTitle = 'DevOps TeamSync';
    document.title =`${baseTitle} | ${to.meta["title"]}`;
    next();
});

export default router;
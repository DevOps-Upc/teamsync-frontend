import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import libraryComponent from "../public/pages/library.component.vue";
import professionalsComponent from "../public/pages/professionals.component.vue";
import profileComponent from "../public/pages/profile.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: HomeComponent, meta: { title: 'Inicio' }, },
        { path: '/about', component: AboutComponent, meta: { title: 'Nosotros' }, },
        { path: '/library', component: libraryComponent, meta: { title: 'Biblioteca' }, },
        { path: '/professionals', component: professionalsComponent, meta: { title: 'Profesionales' }, },
        { path: '/profile', component: profileComponent, meta: { title: 'Perfil' }, },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent },
        { path: '/', redirect: '/home' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'TeamSync ';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;
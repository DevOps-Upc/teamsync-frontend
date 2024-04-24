import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Importar router

//Importar PrimeVue
import PrimeVue from "primevue/config";
//Importar PrimeVue Css
import 'primeflex/primeflex.css';
//Importar PrimeVue Icons
import 'primeicons/primeicons.css'
//Importar PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import router from "./router/index.js";

//Importar Primevue Services

//Importar PrimeVue Components
import Card from "primevue/card";

createApp(App)
    .use(router)
    .use(PrimeVue,{ripple: true})
    .component('pv-card',Card)
    .mount('#app')

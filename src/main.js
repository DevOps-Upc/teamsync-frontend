import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//Importar router
import router from "./router/index.js";

//Importar PrimeVue
import PrimeVue from "primevue/config";
//Importar PrimeVue Css
import 'primeflex/primeflex.css';
//Importar PrimeVue Icons
import 'primeicons/primeicons.css'
//Importar PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css'


//Importar Primevue Services
import ToastService         from 'primevue/toastservice';
import ConfirmationService  from "primevue/confirmationservice";
import DialogService        from "primevue/dialogservice";

//Importar PrimeVue Components
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from 'primevue/button';
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';

createApp(App)
    .use(router)
    .use(PrimeVue,{ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-button',Button)
    .component('pv-dialog',Dialog)
    .component('pv-input-text', InputText)
    .component('pv-input-calendar',Calendar)
    .component('pv-dropdown',Dropdown)
    .mount('#app')

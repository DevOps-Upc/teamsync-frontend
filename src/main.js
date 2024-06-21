import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import router from "./router/index.js";
import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'


//Import PrimeVue Services
import ToastService from 'primevue/toastservice';
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";

//Import PrimeVue Components
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from 'primevue/button';
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import FloatLabel from 'primevue/floatlabel';


createApp(App)
    .use(router)
    .use(PrimeVue,{ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-splitter',Splitter)
    .component('pv-splitter-panel',SplitterPanel)
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-button',Button)
    .component('pv-dialog',Dialog)
    .component('pv-input-text', InputText)
    .component('pv-input-calendar',Calendar)
    .component('pv-dropdown',Dropdown)
    .component('pv-float-label',FloatLabel)
    .mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

// Import router
import router from "./router/index.js";

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeVue Icons
import 'primeicons/primeicons.css';

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';

// PrimeVue Services
import ToastService         from 'primevue/toastservice';
import ConfirmationService  from "primevue/confirmationservice";
import DialogService        from "primevue/dialogservice";

// PrimeVue Components
import ConfirmDialog    from "primevue/confirmdialog";
import Toolbar          from "primevue/toolbar";
import InputText        from "primevue/inputtext";
import Textarea         from "primevue/textarea";
import Button           from "primevue/button";
import Sidebar          from "primevue/sidebar";
import Dialog           from "primevue/dialog";
import Toast            from "primevue/toast";
import Dropdown         from "primevue/dropdown";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-button',         Button)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-dialog',         Dialog)
    .component('pv-dropdown',       Dropdown)
    .component('pv-input-text',     InputText)
    .component('pv-sidebar',        Sidebar)
    .component('pv-textarea',       Textarea)
    .component('pv-toolbar',        Toolbar)
    .component('pv-toast',          Toast)
    .mount('#app')
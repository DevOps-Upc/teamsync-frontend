import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import SplitButton from "primevue/splitbutton";
import Tag from "primevue/tag";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Calendar from "primevue/calendar";
import MultiSelect from "primevue/multiselect";
import DataView from 'primevue/dataview'

const app= createApp(App)
    .use(router)
    .use(PrimeVue,{ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-button', Button)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-card', Card)
    .component('pv-splitbutton', SplitButton)
    .component('pv-dataview', DataView)
    .component('pv-multiselect', MultiSelect)
    .component('pv-calendar', Calendar)
    .component('pv-menubar', Menubar)

app.mount('#app')

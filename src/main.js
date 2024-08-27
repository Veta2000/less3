import { createApp } from 'vue';
import App from './App.vue';
import AppointmentForm from './components/AppointmentForm.vue';

const app = createApp(App);

app.component('AppointmentForm', AppointmentForm);

app.mount('#app');

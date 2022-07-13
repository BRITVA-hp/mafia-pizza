import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import script from './script.js';

const app = createApp(App);

app.use(store);

app.component('main-app', require('./components/Main.vue').default);
app.component('header-app', require('./components/Header.vue').default);
app.component('footer-app', require('./components/Footer.vue').default);
app.component('modal-sity-app', require('./components/modal/ModalSity.vue').default);
app.component('modal-empty-app', require('./components/modal/ModalEmpty.vue').default);
app.component('modal-basket-app', require('./components/modal/ModalBasket.vue').default);
app.component('modal-order-app', require('./components/modal/ModalOrder.vue').default);

app.mount('#app');

script();
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import router from './routes';
import VueRouter from 'vue-router'

Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

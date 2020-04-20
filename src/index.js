import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './routes';
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBntb_x9UygQYvCtpRoiarEmP5DUSj172E',
        libraries: 'places',
    },
    installComponents: true
})
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

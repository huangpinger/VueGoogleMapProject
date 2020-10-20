import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//openLayer
import 'ol/ol.css'
import router from './routes';
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'your keys',
        libraries: 'places',
    },
    installComponents: true
})
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

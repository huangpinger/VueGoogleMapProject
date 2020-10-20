import Routes from 'vue-router';

import mainPages from './views/mainPages.vue'
import baiduMap from './views/baiduMapTest.vue'
import openLayer from './views/openLayerTest.vue'
import attr from './views/attributions.vue'
import canvasTile from './views/canvasTile.vue'
const config = new Routes({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', name: 'home',component: mainPages},
        { path: '/baiduMap', name: 'baiduMap',component: baiduMap},
        { path: '/openLayer', name: 'openLayer',component: openLayer},
        { path: '/attr', name: 'attr',component: attr},
        { path: '/canvasTile', name: 'canvasTile',component: canvasTile},
    ]
})

export default config

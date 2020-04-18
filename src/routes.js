import Routes from 'vue-router';

import mainPages from './views/mainPages.vue'
const config = new Routes({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', name: 'home',component: mainPages}
    ]
})

export default config

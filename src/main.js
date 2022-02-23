import { createApp } from 'vue';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router/index.js';


VueRouter.config.productionTip = false


new Vue({
    render: h=> h(App),
    router,

}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './route/route.js';
import VuePageTransition from 'vue-page-transition';
import VueYoutube from 'vue-youtube';
import './styles/UI-theme/index.css';

import Element from 'element-ui'
import './styles/element-variables.scss'



Vue.config.productionTip = false;
Vue.use(Element)
Vue.use(ElementUI);
Vue.use(VuePageTransition);
Vue.use(VueYoutube);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');


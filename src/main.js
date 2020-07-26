import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(Notifications)

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app');

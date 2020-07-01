import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/Landing";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },

    ]
})
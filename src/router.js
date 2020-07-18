import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/Landing";
import Home from "./views/Home";
import Speaker from "./views/Speaker";
import Staff from "./views/Staff";
import UserRegister from "./views/UserRegister";
import PresentationRegister from "./views/PresentationRegister";
import PresentationDescription from "./views/PresentationDescription";
import WorkshopDescription from "./views/WorkshopDescription";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'Landing',
        //     component: Landing
        // },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/presenter/:id',
            name: 'presenter',
            component: Speaker,
        },
        {
            path: '/teacher/:id',
            name: 'teacher',
            component: Speaker,
        },
        {
            path: '/staff',
            name: 'Staff',
            component: Staff
        },{
            path: '/register/user',
            name: 'register_user',
            component: UserRegister
        },{
            path: '/register/presentation',
            name: 'register_presentation',
            component: PresentationRegister
        },{
            path: '/presentations',
            name: 'description_presentation',
            component: PresentationDescription
        },
        {
            path: '/workshop/:id',
            name: 'description_workshop',
            component: WorkshopDescription
        }

    ]
})
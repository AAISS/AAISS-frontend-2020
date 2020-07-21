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
import Teacher from "./views/Teacher";

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
            path: '/presenters/:id',
            name: 'presenter',
            component: Speaker,
        },
        {
            path: '/teachers/:id',
            name: 'teacher',
            component: Teacher,
        },
        // {
        //     path: '/staff',
        //     name: 'Staff',
        //     component: Staff
        // },
        {
            path: '/register/user',
            name: 'register_user',
            component: UserRegister
        },{
            path: '/register/presentation/:name/:email/:national_code/:phone_number',
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
        },
        {path: "*", component: Home}

    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/Landing";
import Home from "./views/Home";
import Speaker from "./views/Speaker";

import UserRegister from "./views/UserRegister";
import PresentationRegister from "./views/PresentationRegister";
import PresentationDescription from "./views/PresentationDescription";
import WorkshopDescription from "./views/WorkshopDescription";
import Teacher from "./views/Teacher";
import NotFound from "./views/NotFound";
import store from "./store";
import PresentationAndWorkshops from "./views/PresentationAndWorkshops";
import SuccessShopping from "./views/SuccessShopping";
Vue.use(Router);

const router = new Router({
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
        }, {
            path: '/register/presentation/:name/:email/:phone_number',
            name: 'register_presentation',
            component: PresentationRegister
        }, {
            path: '/presentations/:email/show',
            name: 'description_presentation',
            component: PresentationDescription
        },
        {
            path: '/workshop/:id/:email/show',
            name: 'description_workshop',
            component: WorkshopDescription
        },
        {
            path: '/workshops+presentation',
            name: 'presentation_workshops',
            component: PresentationAndWorkshops
        },
        {
            path: "*",
            name: 'not-found',
            component: NotFound
        },
        {
            path: "/successful",
            name: 'SuccessShopping',
            component: SuccessShopping
        }


    ]


})

export default router

// const openRegister = ['register_user', 'register_presentation', 'description_workshop', 'description_presentation'];
// router.beforeEach((to, from, next) => {
//     store.dispatch('getRegisterStatus')
//     console.log(store.getters.getRegisterOpen)
//     if (openRegister.includes(to.name)) {
//         if (store.getters.getRegisterOpen === 'open') {
//             next()
//         } else {
//             next(from.fullPath);
//         }
//     } else {
//         next()
//     }
//     window.scroll(0, 0);
// });
//

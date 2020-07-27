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
import NotSuccessShopping from "./views/NotSuccessShopping";

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
            component: () =>
                import(/* webpackChunkName: "Home" */"./views/Home")
        },
        {
            path: '/presenters/:id',
            name: 'presenter',
            component: Speaker,
        },
        {
            path: '/teachers/:id',
            name: 'teacher',
            component: () =>
                import(/* webpackChunkName: "teacher" */"./views/Teacher")
        },
        // {
        //     path: '/staff',
        //     name: 'Staff',
        //     component: Staff
        // },
        {
            path: '/register/user',
            name: 'register_user',
            component: () =>
                import(/* webpackChunkName: "register_user" */"./views/UserRegister")
        }, {
            path: '/register/presentation',
            name: 'register_presentation',
            component: () =>
                import(/* webpackChunkName: "register_presentation" */"./views/PresentationRegister")
        }, {
            path: '/presentations/show',
            name: 'description_presentation',
            component: () =>
                import(/* webpackChunkName: "description_presentation" */"./views/PresentationDescription")
        },
        {
            path: '/workshop/:id/show',
            name: 'description_workshop',
            component: () =>
                import(/* webpackChunkName: "description_workshop" */"./views/WorkshopDescription")
        },
        {
            path: '/workshops+presentation',
            name: 'presentation_workshops',
            component: () =>
                import(/* webpackChunkName: "presentation_workshops" */"./views/PresentationAndWorkshops")
        },
        {
            path: "*",
            name: 'not-found',
            component: () =>
                import(/* webpackChunkName: "not-found" */"./views/NotFound")
        },
        {
            path: "/successful",
            name: 'SuccessShopping',
            component: () =>
                import(/* webpackChunkName: "SuccessShopping" */"./views/SuccessShopping")
        },
        {
            path: "/notsuccessful",
            name: 'NotSuccessShopping',
            component: () =>
                import(/* webpackChunkName: "NotSuccessShopping" */"./views/NotSuccessShopping")
        }


    ]


})

export default router

const requiredAuth = ['register_presentation'];
// const notRequiredAuth = ['signin', 'signup' , 'forget'];
router.beforeEach((to, from, next) => {
    if (requiredAuth.includes(to.name)) {
        //check if user is logged in
        if (store.getters.getEmail !== "") {
            next()
        } else {
            next('/');
        }
    } else {
        next()
    }
    window.scroll(0, 0);
});



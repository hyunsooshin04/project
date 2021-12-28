import {createRouter, createWebHistory} from "vue-router";
import { store } from "../store/index";

const requireAuth = () => (to, from, next) => {
    if (store.state.isLogin == true) {
        return next();
    }
    else next('/login');
};

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/page/list')
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        beforeEnter: requireAuth()
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/login/Login")
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () => import("../views/login/SignUp")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

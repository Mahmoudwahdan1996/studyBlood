import Vue from "vue";
import VueRouter from "vue-router";
import ErrorView from "@/views/GlobalView/ErrorView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(
                /* webpackChunkName: "home" */ "@/views/GlobalView/HomeView.vue"
            ),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "@/views/PagesView/AboutView.vue"
            ),
    },
    {
        path: "/work-with-us",
        name: "work-with-us",
        component: () =>
            import(
                /* webpackChunkName: "work" */ "@/views/PagesView/WorkView.vue"
            ),
    },
    {
        path: "/subscribe/topic/:id",
        name: "packages",
        component: () =>
            import(
                /* webpackChunkName: "packages" */ "@/views/PagesView/PackagesView.vue"
            ),
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "@/views/PagesView/ProfileView.vue"
            ),
        meta: { requiresAuth: true },
    },
    {
        path: "/topic/:id",
        name: "mcqRevision",
        component: () =>
            import(
                /* webpackChunkName: "mcqRevision" */ "@/views/PagesView/McqRevisionView.vue"
            ),
        // meta: { requiresAuth: true },
    },
    {
        path: "/resources",
        name: "resources",
        component: () =>
            import(
                /* webpackChunkName: "Resources" */ "@/views/PagesView/ResourcesView.vue"
            ),
        meta: { requiresAuth: true },
    },
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import(
                /* webpackChunkName: "contact" */ "@/views/PagesView/ContactView.vue"
            ),
    },
    {
        path: "/payment",
        name: "payment",
        component: () =>
            import(
                /* webpackChunkName: "payment" */ "@/views/PagesView/PaymentView.vue"
            ),
    },
    {
        path: "/correctExams",
        name: "correctExams",
        component: () =>
            import(
                /* webpackChunkName: "correctExams" */ "@/views/PagesView/CorrectExamsView.vue"
            ),
        meta: { requiresAuth: true },
    },
    {
        path: "/score/:id",
        name: "score",
        component: () =>
            import(
                /* webpackChunkName: "score" */ "@/views/PagesView/ScoreView.vue"
            ),
    },
    {
        path: "/exam/perform/:id",
        name: "exams",
        component: () =>
            import(
                /* webpackChunkName: "exams" */ "@/views/PagesView/ExamsView.vue"
            ),
        // meta: { requiresAuth: true },
    },
    {
        path: "/exam/review/:id/:question_id",
        name: "review",
        component: () =>
            import(
                /* webpackChunkName: "exams" */ "@/views/PagesView/ExamsView.vue"
            ),
        // meta: { requiresAuth: true },
    },
    {
        path: "/forgetPassword",
        name: "forgetPassword",
        component: () =>
            import(
                /* webpackChunkName: "forgetPassword" */ "@/views/GlobalView/ForgetPasswordView.vue"
            ),
    },
    {
        path: "/newPassword",
        name: "newPassword",
        component: () =>
            import(
                /* webpackChunkName: "newPassword" */ "@/views/GlobalView/NewPasswordView.vue"
            ),
    },
    {
        path: "/passCode",
        name: "passCode",
        component: () =>
            import(
                /* webpackChunkName: "passCode" */ "@/views/GlobalView/PassCodeView.vue"
            ),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(
                /* webpackChunkName: "login" */ "@/views/GlobalView/LoginView.vue"
            ),
        meta: { disallowAuthed: true },
    },
    {
        path: "/signup",
        name: "signup",
        component: () =>
            import(
                /* webpackChunkName: "signup" */ "@/views/GlobalView/SignUpView.vue"
            ),
        meta: { disallowAuthed: true },
    },
    {
        path: "/:catchAll(.*)",
        name: "ErrorPage",
        component: ErrorView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

    // scroll to sections
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    // console.log(to);

    let AllTitle = `${process.env.VUE_APP_TITLE} | ${to.name}`;

    if (to.params.pageTitle) {
        AllTitle += ` | ${to.params.pageTitle}`;
    }

    document.title = AllTitle;

    // for not enter pages if else user login first

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("authToken")) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }

    // for disallow user from back to login page after login

    if (to.meta.disallowAuthed && localStorage.getItem("authToken")) {
        return next({ path: "/" });
    }

    // next();
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import NotFound from '@/pages/NotFound.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage
    },
    {
        path: '/project/:projectSlug',
        name: 'Project',
        component: ProjectPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
let previousRoute = null;
export const getPreviousRoute = () => previousRoute;
router.beforeEach((to, from, next) => {
    if (from.name) {
        previousRoute = from;
    }
    next();
});
export default router;
//# sourceMappingURL=index.js.map
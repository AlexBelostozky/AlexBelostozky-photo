import {
	createRouter,
	createWebHistory,
	RouteRecordRaw,
	RouteLocationNormalized
} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import NotFound from '@/pages/NotFound.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';

const routes: Array<RouteRecordRaw> = [
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
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {top: 0}
		}
	}
});

let previousRoute: RouteLocationNormalized | null = null;
export const getPreviousRoute = () => previousRoute;

router.beforeEach((to, from, next) => {
	if (from.name) {
		previousRoute = from;
	}
	next();
  });

export default router;

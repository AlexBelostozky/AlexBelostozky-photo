import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
import NotFound from '@/pages/NotFound.vue';
import ProjectsPage from '@/pages/ProjectsPage.vue';

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
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
});

export default router;

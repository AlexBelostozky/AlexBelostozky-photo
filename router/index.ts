import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';
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
	routes
});

export default router;

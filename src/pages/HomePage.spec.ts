import { shallowMount } from '@vue/test-utils';
import HomePage from '@/pages/HomePage.vue';

describe('HomePage', () => {
	it('renders button when projets amount more than projectsToShow', async () => {
		const wrapper = shallowMount(HomePage, {
			data() {
				return {
					isLoadingProjects: false,
					projectsToShow: 2,
					projects: [
						{
							slug: 'project-1',
							name: 'Проект 1',
							cover_url: 'cover1.jpg',
							images: [],
							description: '',
							tags: {
								chassis: 'Chassis',
								make: 'Make',
								model: 'Model',
								year: 1990,
							}
						},
						{
							slug: 'project-2',
							name: 'Проект 2',
							cover_url: 'cover2.jpg',
							images: [],
							description: '',
							tags: {
								chassis: 'Chassis',
								make: 'Make',
								model: 'Model',
								year: 1990,
							}
						},
						{
							slug: 'project-3',
							name: 'Проект 3',
							cover_url: 'cover3.jpg',
							images: [],
							description: '',
							tags: {
								chassis: 'Chassis',
								make: 'Make',
								model: 'Model',
								year: 1990,
							}
						},
					],

				};
			}
		});

		expect(wrapper.find('.recent-section__link').exists()).toBe(true);
	})
})
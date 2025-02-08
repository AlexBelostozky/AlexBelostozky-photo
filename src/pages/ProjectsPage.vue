<template>
	<div class="projects-section">
		<div class="projects-section__filter-wrapper" v-if="isLoading || showingProjects.length">
			<div class="container">
				<h2>Фильтры</h2>
			</div>
		</div>

		<div class="projects-section__results">
			<div class="container">
				<div class="projects-section__results-grid">
					<ul class="recent-section__list">
						<template v-if="isLoading">
							<ABProjectItemLoader
								v-for="idx in projectsPerPage"
								:key="idx"
								:loading="isLoading"
							/>
						</template>

						<template v-else-if="showingProjects.length">
							<ABProjectItem
								v-for="project in showingProjects"
								:key="project.url"
								:projectName="project.name"
								:projectUrl="project.url"
								:projectCoverUrl="project.cover_url"
							/>
						</template>
					</ul>

					<v-pagination
						v-if="pagesAmount > 1"
						v-model="page"
						:length="pagesAmount"
					/>
				</div>
			</div>
		</div>

		<template v-if="!isLoading && !showingProjects.length">
			<div class="projects-section__empty-list">
				<v-empty-state
					title="Проекты не найдены..."
					text="Давайте вместе создадим нечто прекрасное!"
					:image="require('@images/no-projects.svg')"
				/>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectType } from '@/types/project';
import ABProjectItem from '@/components/ABProjectItem.vue';
import ABProjectItemLoader from '@/components/UI/ABProjectItemLoader.vue';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

import { getProjects } from '@/api';


interface CachedProjects {
	[key: number]: Array<ProjectType>;
}

interface ProjectsPageData {
	page: number,
	projectsPerPage: number,
	lastVisible: QueryDocumentSnapshot<DocumentData, DocumentData> | null,
	isLoading: boolean,
	cachedProjects: CachedProjects,
	showingProjects: Array<ProjectType>,
	totalProjects: number,
}

export default defineComponent({
	name: 'ProjectsPage',

	components: {
		ABProjectItem,
		ABProjectItemLoader,
	},

	data(): ProjectsPageData {
		return {
			page: 1,
			projectsPerPage: 6,
			lastVisible: null,
			isLoading: true,
			cachedProjects: {
				// 1: [
				// 	{
				// 		'name': 'Celsior',
				// 		'coverUrl': require('@images/content/projects/celsior/celsior-cover.jpg'),
				// 		'url': '/celsior'
				// 	},
				// 	{
				// 		'name': 'Laurel',
				// 		'coverUrl': require('@images/content/projects/laurel/laurel-cover.jpg'),
				// 		'url': '/laurel'
				// 	},
				// 	{
				// 		'name': 'Mark II',
				// 		'coverUrl': require('@images/content/projects/mark/mark-cover.jpg'),
				// 		'url': '/mark'
				// 	},
				// 	{
				// 		'name': 'Museum',
				// 		'coverUrl': require('@images/content/projects/museum/museum-cover.jpg'),
				// 		'url': '/museum'
				// 	},
				// 	{
				// 		'name': '2104',
				// 		'coverUrl': require('@images/content/projects/2104/2104-cover.jpg'),
				// 		'url': '/2104'
				// 	},
				// 	{
				// 		'name': 'Cresta',
				// 		'coverUrl': require('@images/content/projects/cresta/cresta-cover.jpg'),
				// 		'url': '/cresta'
				// 	},
				// ]
			},
			showingProjects: [],
			totalProjects: 0,
		}
	},

	methods: {
		async showProjects(page: number, projectsPerPage: number) {
			if (this.cachedProjects[page]) {
				this.showingProjects = this.cachedProjects[page];
				this.isLoading = false;
				return;
			}

			try {
				this.isLoading = true;

				const {
					lastFromSnapshot,
					fetchedProjects
				} = await getProjects('projects', projectsPerPage, this.lastVisible);

				this.lastVisible = lastFromSnapshot;

				fetchedProjects.forEach(project => {
					if (!this.cachedProjects[page]) {
						this.cachedProjects[page] = [];
					}
					this.cachedProjects[page].push(project);
				});

				this.showingProjects = fetchedProjects;
			} catch (error) {
				console.warn('Failed to get projects from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		}
	},

	mounted() {
		if (!this.showingProjects.length) {
			this.showProjects(this.page, this.projectsPerPage);
		}
	},

	computed: {
		pagesAmount() {
			return Math.ceil(this.totalProjects / this.projectsPerPage);
		}
	},

	watch: {
		page(value) {
			this.showProjects(value, this.projectsPerPage);
		}
	},
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.projects-section
	display: flex
	flex-direction: column
	gap: 32px
	padding: 60px 0 70px

	@include screen(sm)
		padding: 40px 0 30px

.projects-section__filter-wrapper
	position: sticky
	top: 57px
	background-color: $white-75
	backdrop-filter: blur(6px)
	z-index: 1

	@include screen(sm)
		top: 40px

.projects-section__results-grid
	display: flex
	flex-direction: column
	gap: 20px

.projects-section__empty-list
	display: flex
	flex-direction: column
	justify-content: center
	min-height: 65vh
</style>
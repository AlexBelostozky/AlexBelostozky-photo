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
								:key="project.slug"
								:projectName="project.name"
								:projectUrl="{ name: 'Project', params: { projectSlug: project.slug } }"
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
			cachedProjects: {},
			showingProjects: [],
			totalProjects: 0,
		}
	},

	methods: {
		async showProjects(page: number, projectsPerPage: number) {
			if (this.cachedProjects[page]) {
				console.log('try show cached');

				console.log(this.cachedProjects);

				this.showingProjects = this.cachedProjects[page];
				this.isLoading = false;
				return;
			}

			try {
				console.log('try load new with page: ', this.page);

				this.isLoading = true;

				const offset = (page - 1) * projectsPerPage;

				const {
					lastFromSnapshot,
					fetchedProjects,
					totalProjects
				} = await getProjects('projects', projectsPerPage, offset);

				this.lastVisible = lastFromSnapshot;
				this.totalProjects = totalProjects;

				// fetchedProjects.forEach(project => {
				// 	if (!this.cachedProjects[page]) {
				// 		this.cachedProjects[page] = [];
				// 		this.cachedProjects[page].push(project);
				// 	}
				// });

				this.showingProjects = fetchedProjects;
			} catch (error) {
				console.warn('Failed to get projects from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		}
	},

	beforeMount() {
		const pageFromURL = Number(this.$route.query.page);
		if (!isNaN(pageFromURL) && pageFromURL > 0) {
			this.page = pageFromURL;
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

			this.$router.push({ query: { ...this.$route.query, page: value } });
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
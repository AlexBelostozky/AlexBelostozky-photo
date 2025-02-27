<template>
	<div class="projects-section">
		<div class="projects-section__filter" v-if="isLoading || filters">
			<div class="container">
				<v-form @change="applyFilter">
					<div class="project-section__filter-grid">
						<v-select
							v-for="(values, key) in filters"
							v-model="filterForm[key]"
							class="project-section__filter-select"
							:key="key"
							:label="key"
							:items="[...values]"
							clearable
							chips
							variant="outlined"
							density="compact"
							hide-details
							:clear-icon="'mdil-minus-circle'"
							:menu-icon="'mdil-chevron-down'"
						></v-select>

						<v-select
							v-model="filterForm['sorting']"
							class="project-section__filter-select"
							label="Сортировка"
							:items="['Сначала новые', 'Сначала старые']"
							clearable
							variant="outlined"
							density="compact"
							hide-details
							:clear-icon="'mdil-minus-circle'"
							:menu-icon="'mdil-chevron-down'"
						></v-select>
					</div>
				</v-form>
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
import { getAllTags, getProjects } from '@/api';


// interface CachedProjects {
// 	[key: number]: Array<ProjectType>;
// }

interface FilterType {
	sorting?: 'Сначала старые' | 'Сначала новые',
	[key: string]: string | number | undefined
}

interface ProjectsPageData {
	page: number,
	projectsPerPage: number,
	isLoading: boolean,
	showingProjects: Array<ProjectType>,
	totalProjects: number,
	filters: Object | undefined,
	filterForm: FilterType,
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
			isLoading: true,
			showingProjects: [],
			totalProjects: 0,
			filters: {
				sorting: 'Сначала новые'
			} as FilterType,
			filterForm: {}
		}
	},

	methods: {
		async showProjects(page: number, projectsPerPage: number, filters: FilterType = {}) {
			try {
				this.isLoading = true;

				const offset = (page - 1) * projectsPerPage;
				const sortingParam: { parameter: string; order?: "asc" | "desc" } | undefined = filters.sorting
					? {
						parameter: 'tags.year',
						order: filters.sorting === 'Сначала старые' ? 'asc' : 'desc'
					} : undefined;
				const queryFilters = {...filters};
				delete queryFilters.sorting;


				({
					fetchedProjects: this.showingProjects,
					totalProjects: this.totalProjects
				} = await getProjects(
					'projects',
					projectsPerPage,
					offset,
					sortingParam,
					queryFilters
				));

				this.setupFilters();
			} catch (error) {
				console.warn('Failed to get projects from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		},

		async setupFilters() {
			this.filters = await getAllTags();
		},

		applyFilter() {
			const params = Object.entries(this.filterForm)
				.filter(([ , value]) => value)
				.reduce((acc, [key, value]) => {
					if (value !== undefined) {
						acc[key] = value;
					}
					return acc;
				}, {} as Record<string, string | number>);

			this.$router.push({query: {...this.$route.query, ...params}})

			this.showProjects(this.page, this.projectsPerPage, params);
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
		},

		filterForm: {
			deep: true,
			handler() {
				this.applyFilter();
			}
		},
	},
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.projects-section
	display: flex
	flex-direction: column
	gap: 5px
	background-color: $white
	padding: 0 0 70px

	@include screen(sm)
		padding: 0 0 30px

.projects-section__filter
	position: sticky
	top: 57px
	min-height: 60px
	background-color: $white-75
	backdrop-filter: blur(6px)
	z-index: 1

	@include screen(sm)
		top: 40px

.project-section__filter-grid
	display: grid
	grid-template-columns: repeat(5, 1fr)
	gap: 15px
	padding: 20px 0

.project-section__filter-select


	.v-field-label
		text-transform: capitalize

.projects-section__results
	flex-grow: 1

	.container
		height: 100%

.projects-section__results-grid
	display: flex
	flex-direction: column
	justify-content: space-between
	gap: 20px
	height: 100%

.projects-section__empty-list
	display: flex
	flex-direction: column
	justify-content: center
	min-height: 65vh
</style>
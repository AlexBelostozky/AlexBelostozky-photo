<template>
	<div class="projects-section">
		<div class="projects-section__filter" v-if="isLoading || filters">
			<div class="container container--mobile-extended">
				<v-form class="projects-section__filter-form">
					<div class="project-section__filter-grid">
						<v-select
							v-for="(values, key) in filters"
							v-model="filterForm[key]"
							class="project-section__filter-select"
							:key="key"
							:label="key"
							:items="[...values].sort((a, b) => String(a).localeCompare(String(b)))"
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
							:items="[
								{ title: 'Сначала новые', value: 'desc' },
								{ title: 'Сначала старые', value: 'asc' }
							]"
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
import { applySpecificOrder } from '@/utils';

interface FilterType {
	sorting?: 'asc' | 'desc',
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
	filtersOrder: Array<string>
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
			filters: undefined,
			filterForm: {},
			filtersOrder: ['make', 'model', 'chassis', 'year']
		}
	},

	methods: {
		async showProjects() {
			try {
				this.isLoading = true;

				const offset = (this.page - 1) * this.projectsPerPage;
				const filters = {...this.filterForm};
				const sortingParam = filters.sorting;
				delete filters.sorting;

				({
					fetchedProjects: this.showingProjects,
					totalProjects: this.totalProjects
				} = await getProjects({
					collectionName: 'projects',
					projectsAmount: this.projectsPerPage,
					offset,
					sorting: sortingParam,
					filters: filters as Record<string, string | number>
				}));
			} catch (error) {
				console.warn('Failed to get projects from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		},

		async setupFilters() {
			const filters = {...this.filterForm};
			delete filters.sorting;
			delete filters.page;

			this.filters = await getAllTags(filters as Record<string, string | number>)
				.then(res => Object.fromEntries(applySpecificOrder(res, this.filtersOrder)));
		},

		updateRouteQuery() {
			const params = Object.fromEntries(
				Object.entries(this.filterForm).filter(([ , value]) => {
					if (!value) {
						return
					}
					return value !== undefined && value !== ''
				}
			));

			params.page = this.page.toString();

			this.$router.push({query: params});
		},

		setFiltersFromQuery() {
			const query = this.$route.query;

			this.filterForm = Object.fromEntries(
				Object.entries(query).map(([key, value]) => {
					if (Array.isArray(value)) {
						return [key, value[0]];
					}

					if (key === 'year') {
						return [key, Number(value)];
					}

					return [key, value];
				})
			) as FilterType;

			const pageFromUrl = Number(query.page);

			this.page = !isNaN(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;
		},
	},

	beforeMount() {
		this.setFiltersFromQuery();
		this.showProjects();
	},

	mounted() {
		this.setupFilters();
	},

	computed: {
		pagesAmount(): number {
			return Math.max(Math.ceil(this.totalProjects / this.projectsPerPage), 1)
		}
	},

	watch: {
		'$route.query': {
			immediate: true,
			handler() {
				this.setFiltersFromQuery(),
				this.showProjects()
			}
		},

		filterForm: {
			deep: true,
			handler(newQuery, oldQuery) {
				const onlyPageChanged = Object.keys(newQuery).length === Object.keys(oldQuery || {}).length &&
					Object.keys(newQuery).every(key => key === 'page' || newQuery[key] === oldQuery[key]);

				if (!onlyPageChanged) {
					this.page = 1
				}
				this.updateRouteQuery();
				this.setupFilters();
			}
		},

		page: {
			immediate: true,
			handler() {
				this.updateRouteQuery();
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
		min-height: 56px
		width: 100vw

.projects-section__filter-form
	@include screen(sm)
		overflow: hidden

.project-section__filter-grid
	display: grid
	grid-template-columns: repeat(5, 1fr)
	gap: 15px
	padding: 20px 0

	@include screen(sm)
		grid-template-columns: repeat(5, min(80vw, 160px))
		gap: 5px
		padding: 12px max(min(5vw, 24px), env(safe-area-inset-right)) 12px max(min(5vw, 24px), env(safe-area-inset-left))
		overflow: auto
		scrollbar-width: none

		&::-webkit-scrollbar
			display: none

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
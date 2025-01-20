<template>
	<div class="projects-section">
		<h1 class="visually-hidden">Проекты</h1>

		<div class="projects-section__filter-wrapper">
			<div class="container">
				<h2>Фильтры</h2>
			</div>
		</div>

		<div class="projects-section__results">
			<div class="container">
				<div class="projects-section__results-grid">

					<ul class="recent-section__list">
						<ABProjectItem
							v-for="project in projects"
							:key="project.url"
							:projectName="project.name"
							:projectUrl="project.url"
							:projectCoverUrl="project.coverUrl"
						/>
					</ul>

					<v-pagination
						:length="8"
					></v-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ABProjectItem from '@/components/ABProjectItem.vue';

export default defineComponent({
	name: 'ProjectsPage',

	components: {
		ABProjectItem,
	},

	data() {
		return {
			projects: [
				{
					'name': 'Celsior',
					'coverUrl': require('@images/content/projects/celsior/celsior-cover.jpg'),
					'url': '/celsior'
				},
				{
					'name': 'Laurel',
					'coverUrl': require('@images/content/projects/laurel/laurel-cover.jpg'),
					'url': '/laurel'
				},
				{
					'name': 'Mark II',
					'coverUrl': require('@images/content/projects/mark/mark-cover.jpg'),
					'url': '/mark'
				},
				{
					'name': 'Museum',
					'coverUrl': require('@images/content/projects/museum/museum-cover.jpg'),
					'url': '/museum'
				},
				{
					'name': '2104',
					'coverUrl': require('@images/content/projects/2104/2104-cover.jpg'),
					'url': '/2104'
				},
				{
					'name': 'Cresta',
					'coverUrl': require('@images/content/projects/cresta/cresta-cover.jpg'),
					'url': '/cresta'
				},
			]
		}
	}
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

.projects-section__filter-wrapper
	position: sticky
	top: 57px
	background-color: $white-75
	backdrop-filter: blur(6px)
	z-index: 1

.projects-section__results-grid
	display: flex
	flex-direction: column
	gap: 20px
</style>
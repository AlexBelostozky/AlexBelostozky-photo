<template>
	<div class="project-section">
		<div class="container">
			<h1>{{ projectData?.name }}</h1>

			<div class="project-section__tags-wrapper">
				<ul class="project-section__tags-list">
					<li
						v-for="(tagValue, tagKey) in projectData?.tags"
						:key="tagKey"
						class="project-section__tag-item"
					>
						<router-link :to="`/projects?${ tagKey }=${encodeURIComponent(tagValue)}`">
							{{ tagKey }}: {{ tagValue }}
						</router-link>
					</li>
				</ul>
			</div>

			<p class="project-section__description">
				{{ projectData?.description }}
			</p>

			<div class="project-section__gallery">
				<img
					v-for="image in projectData?.images"
					:key="image"
					:src="image"
					:alt="projectData?.name"
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectType } from '@/types/project';
// import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

import { getProject } from '@/api';

interface ProjectPageData {
	isLoading: boolean,
	projectData: ProjectType | null,
}

export default defineComponent({
	name: 'ProjectPage',

	components: {

	},

	data(): ProjectPageData {
		return {
			isLoading: true,
			projectData: null,
		}
	},

	methods: {
		async showProject() {
			try {
				this.isLoading = true;

				const projectSlug = Array.isArray(this.$route.params.projectSlug)
					? this.$route.params.projectSlug[0]
					: this.$route.params.projectSlug;

				const fetchedProject = await getProject('projects', projectSlug);

				console.log(fetchedProject?.tags);

				// fetchedProject.forEach(project => {
				// 	if (!this.cachedProjects[page]) {
				// 		this.cachedProjects[page] = [];
				// 	}
				// 	this.cachedProjects[page].push(project);
				// });

				this.projectData = fetchedProject;
			} catch (error) {
				console.warn('Failed to get project from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		}
	},

	mounted() {
		this.showProject();
	},

	computed: {

	},

	watch: {

	},
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.project-section
	display: flex
	flex-direction: column
	gap: 32px
	padding: 80px 0 70px

	@include screen(sm)
		padding: 60px 0 30px

</style>
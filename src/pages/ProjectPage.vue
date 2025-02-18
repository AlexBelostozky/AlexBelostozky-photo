<template>
	<div class="project-section">
		<div class="container">
			<h1 class="project-section__heading">{{ projectData?.name }}</h1>

			<div class="project-section__tags-wrapper">
				<ul class="project-section__tags-list">
					<li
						class="project-section__tag-item"
						v-for="([tagKey, tagValue], idx) in sortedTags"
						:key="idx"
					>
						<span class="project-section__tag-key">{{ tagKey }}: </span>
						<router-link :to="`/projects?${ tagKey }=${encodeURIComponent(tagValue.toString())}`">
							{{ tagValue }}
						</router-link>
					</li>
				</ul>
			</div>

			<div
				class="project-section__description"
				v-html="renderMarkdown(projectData?.description || '')"
			></div>
		</div>

		<div class="project-section__gallery">
			<ABGallery
				v-if="projectData"
				:images="projectData?.images"
				:projectName="projectData?.name"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectType } from '@/types/project';
import { renderMarkdown } from '@/utils';
import ABGallery from '@/components/ABGallery.vue';

import { getProject } from '@/api';

interface ProjectPageData {
	isLoading: boolean,
	projectData: ProjectType | null,
}

export default defineComponent({
	name: 'ProjectPage',

	components: {
		ABGallery,
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

				this.projectData = fetchedProject;
			} catch (error) {
				console.warn('Failed to get project from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		},

		renderMarkdown,
	},

	mounted() {
		this.showProject();
	},

	computed: {
		sortedTags(): [string, string | number][] {
			if (!this.projectData || !this.projectData.tags ) return [];

			const order = ['make', 'model', 'chassis', 'year'];

			return Object.entries(this.projectData.tags).sort((a, b) => {
				const indexA = order.indexOf(a[0]);
				const indexB = order.indexOf(b[0]);

				if (indexA === -1 && indexB === -1) {
					return a[0].localeCompare(b[0]);
				}

				if (indexA === -1) return 1;
				if (indexB === -1) return -1;
				return indexA - indexB;
			});
		}
	}
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

.project-section__heading
	max-width: 600px
	font-weight: 600
	font-size: 48px
	line-height: 57px
	margin: 0 auto 24px

.project-section__tags-wrapper
	max-width: 600px
	margin: 0 auto 16px

.project-section__tags-list
	display: flex
	gap: 15px
	flex-wrap: wrap
	list-style: none
	margin: 0
	padding: 0

.project-section__tag-item
	margin: 0
	padding: 0

.project-section__tag-key
	text-transform: capitalize

.project-section__description
	max-width: 600px
	text-align: left
	margin: 0 auto 40px

	p
		font-weight: 300
		font-size: 18px
		line-height: 27px
		margin-bottom: 16px
</style>
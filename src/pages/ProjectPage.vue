<template>
	<div class="project-section">
		<div class="container">
			<v-skeleton-loader class="project-section__heading" v-if="isLoading" type="heading" />
			<h1 class="project-section__heading" v-else>{{ projectData?.name }}</h1>

			<div class="project-section__tags-wrapper">
				<v-skeleton-loader
					class="project-section__tag-key"
					v-if="isLoading"
					type="chip@4"
				/>

				<ul class="project-section__tags-list" v-else>
					<li
						class="project-section__tag-item"
						v-for="([tagKey, tagValue], idx) in sortedTags"
						:key="idx"
					>
						<span class="project-section__tag-key">{{ tagKey }}: </span>
						<router-link
							:to="`/projects?${ tagKey }=${ encodeURIComponent(tagValue.toString()) }`"
						>{{ tagValue }}</router-link>
					</li>
				</ul>
			</div>

			<v-skeleton-loader
				class="project-section__description"
				v-if="isLoading"
				type="text@10"
			/>
			<div
				class="project-section__description"
				v-else
				v-html="renderMarkdown(projectData?.description || '')"
			></div>
		</div>

		<div class="project-section__gallery">
			<div class="container container--mobile-extended" v-if="isLoading">
				<v-skeleton-loader
					type="image"
				/>
			</div>

			<ABGallery
				v-else-if="projectData"
				:images="projectData?.images"
				:projectName="projectData?.name"
			/>
		</div>

		<router-link
			class="project-section__link"
			:to="backLink"
		>
			<v-icon
				icon="mdil-chevron-left"
			></v-icon>
			Все&nbsp;проекты
		</router-link>

		<ABScrollTopButton />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectType } from '@/types/project';
import { getPreviousRoute } from '@/router/index';
import { applySpecificOrder, renderMarkdown } from '@/utils';
import ABGallery from '@/components/ABGallery.vue';

import { getProject } from '@/api';
import ABScrollTopButton from '@/components/UI/ABScrollTopButton.vue';

interface ProjectPageData {
	isLoading: boolean,
	projectData: ProjectType | null,
	tagsOrder: Array<string>
}

export default defineComponent({
	name: 'ProjectPage',

	components: {
		ABGallery,
		ABScrollTopButton,
	},

	data(): ProjectPageData {
		return {
			isLoading: true,
			projectData: null,
			tagsOrder: ['make', 'model', 'chassis', 'year']
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

				this.projectData = fetchedProject || null;

				fetchedProject && this.setMetaTags(fetchedProject);
			} catch (error) {
				console.warn('Failed to get project from Firebase: ', error)
			} finally {
				this.isLoading = false;
			}
		},

		setMetaTags(projectData: ProjectType) {
			document.title = projectData.name;

			const descriptionMeta = document.querySelector('meta[name="description"]');
			descriptionMeta && descriptionMeta.setAttribute('content', 'Проект AlexBelostozky');
		},

		renderMarkdown,
	},

	mounted() {
		this.showProject();
	},

	computed: {
		sortedTags(): [string, string | number][] {
			return applySpecificOrder(this.projectData?.tags, this.tagsOrder);
		},

		backLink() {
			const prev = getPreviousRoute();

			if (prev && prev.name !== 'Home') {
				return prev.fullPath
			} else {
				return { name: 'Projects' }
			}
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
	background-color: $white
	padding: 32px 0 32px

	@include screen(sm)
		padding: 15px 0 30px

.project-section__heading
	max-width: 600px
	font-weight: 600
	font-size: 48px
	line-height: 57px
	margin: 0 auto 24px

	@include screen(sm)
		font-size: 32px
		line-height: normal
		text-align: left
		margin: 0 auto 10px


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

	@include screen(sm)
		gap: 8px

.project-section__tag-item
	margin: 0
	padding: 0

	@include screen(sm)
		font-size: 14px
		line-height: normal

.project-section__tag-key
	text-transform: capitalize

.project-section__description
	max-width: 600px
	text-align: left
	margin: 0 auto 20px

	p
		font-weight: 300
		font-size: 18px
		line-height: 27px

		&:not(:last-child)
			margin-bottom: 16px

	@include screen(sm)
		margin: 0 auto 0

		p
			font-weight: 300
			font-size: 16px
			font-size: min(5vw, 18px)
			line-height: 1.5em

			&:not(:last-child)
				margin-bottom: 10px

.project-section__link
	display: flex
	width: fit-content
	margin: 0 auto
	padding: 15px

	@include screen(sm)
		padding: 0
</style>
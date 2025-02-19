<template>
	<section class="about-section">
		<div class="container" id="about">
			<div class="about-section__grid">
				<div class="about-section__portrait">
					<picture>
						<source media="(max-width: 768px)" :srcset="mainData?.portrait.mobile_webp" type="image/webp">
						<source media="(max-width: 768px)" :srcset="mainData?.portrait.mobile" type="image/jpeg">

						<source :srcset="mainData?.portrait.desktop_webp" type="image/webp">
						<img
							:src="mainData?.portrait.desktop"
							width="248"
							height="248"
							alt="Александр Белостоцкий"
						>
					</picture>
				</div>

				<h1 class="about-section__story-heading">{{ mainData?.heading }}</h1>

				<div
					class="about-section__story-text-wrapper"
					v-html="renderMarkdown(mainData?.description || '')"
				></div>
			</div>
		</div>
	</section>

	<section class="recent-section" id="works">
		<div class="container">
			<ul class="recent-section__list">
				<template v-if="isLoadingProjects">
					<ABProjectItemLoader
						v-for="idx in projectsToShow"
						:key="idx"
						:loading="isLoadingProjects"
					/>
				</template>

				<ABProjectItem
					v-for="project in recentProjects"
					:key="project.slug"
					:projectName="project.name"
					:projectUrl="{ name: 'Project', params: {projectSlug: project.slug} }"
					:projectCoverUrl="project.cover_url"
				/>
			</ul>

			<router-link
				v-if="projects.length > 6"
				:to="{name: 'Projects'}"
			>Все проекты</router-link>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getMainPageData, getProjects } from '@/api';
import { MainPageData } from '@/types/main';
import { ProjectType } from '@/types/project';
import { renderMarkdown } from '@/utils';
import ABProjectItem from '@/components/ABProjectItem.vue';
import ABProjectItemLoader from '@/components/UI/ABProjectItemLoader.vue';

interface HomePageData {
	isLoadingMainData: boolean,
	isLoadingProjects: boolean,
	projectsToShow: number,
	mainData: MainPageData | null,
	projects: Array<ProjectType>,
}

export default defineComponent({
	name: 'HomePage',

	components: {
		ABProjectItem,
		ABProjectItemLoader
	},

	data(): HomePageData {
		return {
			isLoadingMainData: true,
			isLoadingProjects: true,
			projectsToShow: 6,

			mainData: null,

			projects: [
				// {
				// 	'name': 'Celsior',
				// 	'coverUrl': require('@images/content/projects/celsior/celsior-cover.jpg'),
				// 	'url': '/celsior'
				// },
				// {
				// 	'name': 'Laurel',
				// 	'coverUrl': require('@images/content/projects/laurel/laurel-cover.jpg'),
				// 	'url': '/laurel'
				// },
				// {
				// 	'name': 'Mark II',
				// 	'coverUrl': require('@images/content/projects/mark/mark-cover.jpg'),
				// 	'url': '/mark'
				// },
				// {
				// 	'name': 'Museum',
				// 	'coverUrl': require('@images/content/projects/museum/museum-cover.jpg'),
				// 	'url': '/museum'
				// },
				// {
				// 	'name': '2104',
				// 	'coverUrl': require('@images/content/projects/2104/2104-cover.jpg'),
				// 	'url': '/2104'
				// },
				// {
				// 	'name': 'Cresta',
				// 	'coverUrl': require('@images/content/projects/cresta/cresta-cover.jpg'),
				// 	'url': '/cresta'
				// },
			]
		}
	},

	methods: {
		async showMainPageData () {
			try {
				this.isLoadingMainData = true;
				this.mainData = await getMainPageData('main');
			} catch (error) {
				console.warn('Failed to show main: ', error);
			} finally {
				this.isLoadingMainData = false;
			}
		},

		async showProjects () {
			try {
				this.isLoadingProjects = true;

				const {
					fetchedProjects
				} = await getProjects('projects', this.projectsToShow + 1);

				this.projects = fetchedProjects;
			} catch (error){
				console.warn('Failed to show projects: ', error);
			} finally {
				this.isLoadingProjects = false;
			}
		},

		renderMarkdown,
	},

	beforeMount() {
		this.showMainPageData();
		this.showProjects();
	},

	computed: {
		recentProjects(): Array<ProjectType>  {
			return this.projects.slice(0, this.projectsToShow);
		},
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.about-section
	background-color: $blue-dark
	background-image: url('@images/bg.jpg')
	background-image: image-set(url('@images/bg.webp') type('image/webp'), url('@images/bg.jpg') type('image/jpeg'))
	background-repeat: no-repeat
	background-size: 100% 100%
	background-position: center
	background-size: cover
	padding: 120px 0 70px

	@include screen(sm)
		background-image: url('@images/bg-mobile.jpg')
		background-image: image-set(url('@images/bg-mobile.webp') type('image/webp'), url('@images/bg-mobile.jpg') type('image/jpeg'))
		padding: 70px 0 40px

.about-section__grid
	display: grid
	grid-template-columns:  284px 1fr
	grid-template-areas: 'portrait heading' 'portrait story'
	grid-column-gap: 56px
	width: 100%
	margin: 0 auto

	@include screen(sm)
		grid-template-columns:  1fr 1fr
		grid-template-areas: 'portrait heading' 'story story'
		grid-column-gap: 26px
		grid-row-gap: 22px

	@include screen(xs)
		grid-template-columns:  95px 1fr

.about-section__portrait
	grid-area: portrait
	justify-self: end

	picture
		display: block
		line-height: 0

	img
		width: 100%
		height: auto
		@include gradient-border-radius

		@include screen(sm)
			width: 95px

.about-section__story-heading
	grid-area: heading
	font-family: $font-sf
	font-weight: 600
	font-size: 48px
	line-height: 57px
	text-align: left
	color: $white
	margin: 0 0 24px

	br
		display: none

	@include screen(sm)
		align-self: center
		font-size: 24px
		line-height: normal
		margin: 0

		br
			display: inline

	@include screen(xs)
		align-self: end

.about-section__story-text-wrapper
	grid-area: story

	p
		font-family: $font-sf
		font-weight: 400
		font-size: 18px
		line-height: 27px
		letter-spacing: -0.03em
		text-align: left
		color: $white
		margin: 0

		&:not(:last-child)
			margin-bottom: 16px

		a
			color: $orange

			&:visited
				color: $orange

		@include screen(sm)
			font-size: 14px
			line-height: 24px

			&:not(:last-child)
				margin-bottom: 8px

.recent-section
	padding: 50px 0

.recent-section__list
	display: grid
	grid-template-columns:  1fr 1fr 1fr
	grid-column-gap: 20px
	grid-row-gap: 36px
	list-style: none
	margin: 0px
	padding: 0px

	@include screen(sm)
		grid-template-columns:  1fr 1fr

	@include screen(xs)
		grid-template-columns:  1fr
</style>
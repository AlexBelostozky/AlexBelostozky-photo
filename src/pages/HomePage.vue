<template>
	<section class="about-section">
		<div class="container" id="about">
			<div class="about-section__grid">
				<div class="about-section__portrait">
					<v-skeleton-loader
						v-if="!isPortraitLoaded"
						type="image"
					/>

					<picture v-show="isPortraitLoaded">
						<source media="(max-width: 768px)" :srcset="mainData?.portrait.mobile_webp" type="image/webp">
						<source media="(max-width: 768px)" :srcset="mainData?.portrait.mobile" type="image/jpeg">

						<source :srcset="mainData?.portrait.desktop_webp" type="image/webp">
						<img
							:src="mainData?.portrait.desktop"
							width="248"
							height="248"
							alt="Александр Белостоцкий"
							@load="handleLoadPortrait"
						>
					</picture>
				</div>

				<v-skeleton-loader
					class="about-section__story-heading"
					v-if="isLoadingMainData"
					type="heading"
					color="transparent"
				/>
				<h1
					class="about-section__story-heading"
					v-else
					v-html="prettifyText(mainData?.heading || '')"
				></h1>

				<v-skeleton-loader
					class="about-section__story-text-wrapper"
					v-if="isLoadingMainData"
					type="text@15"
					color="transparent"
				/>
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
import { renderMarkdown, prettifyText } from '@/utils';
import ABProjectItem from '@/components/ABProjectItem.vue';
import ABProjectItemLoader from '@/components/UI/ABProjectItemLoader.vue';

interface HomePageData {
	isLoadingMainData: boolean,
	isLoadingProjects: boolean,
	isPortraitLoaded: boolean,
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
			isPortraitLoaded: false,
			projectsToShow: 6,
			mainData: null,
			projects: []
		}
	},

	methods: {
		handleLoadPortrait () {
			this.isPortraitLoaded = true;
		},

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
		prettifyText,
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
	position: relative
	grid-area: portrait
	justify-self: end
	width: 100%
	padding-top: 100%
	height: fit-content

	picture
		display: block
		line-height: 0

	img,
	.v-skeleton-loader
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		@include gradient-border-radius

	.v-skeleton-loader__bone
		height: 100%

	@include screen(sm)
		width: 95px
		height: 95px
		padding-top: 0

		img,
		.v-skeleton-loader
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

	@include screen(sm)
		align-self: center
		font-size: 24px
		line-height: normal
		margin: 0

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
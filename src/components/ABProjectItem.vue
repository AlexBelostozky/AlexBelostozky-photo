<template>
	<li class="recent-section__item">
		<router-link class="project-item__link" :to="projectUrl">
			<div class="project-item__image-wrapper">
				<v-skeleton-loader
					class="project-item__image"
					v-if="!isLoaded"
					type="image"
				/>

				<img
					v-show="isLoaded"
					class="project-item__image"
					:src="projectCoverUrl"
					width="320"
					height="320"
					:alt="`Проект ${ projectName }`"
					@load="handleLoad"
					@error="handleError"
				>
			</div>

			<span class="project-item__title">{{ projectName }}</span>
		</router-link>
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export default defineComponent({
	name: 'ABProjectItem',

	props: {
		projectName: {
			type: String,
			default: 'Проект без названия 🤔'
		},
		projectUrl: {
			type: [String, Object] as PropType<string | RouteLocationRaw>,
			default: '/404'
		},
		projectCoverUrl: {
			type: String,
			default: '@images/blank-cover.jpg'
		}
	},

	setup() {
		const isLoaded = ref(false);

		const handleLoad = () => {
			isLoaded.value = true;
		};

		const handleError = () => {
			isLoaded.value = true;

			console.warn('Faialed to load image')
		};

		return {
			isLoaded,
			handleLoad,
			handleError,
		}
	},
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.project-item__link
	display: flex
	flex-direction: column
	gap: 8px
	width: 100%
	font-weight: 500
	font-size: 18px
	line-height: 27px
	color: $black-75
	transition: all .2s ease-in-out

	&:visited
		color: $black-75

	&:hover
		color: $blue

		.project-item__image
			transform: scale(1.01)

.project-item__image-wrapper
	position: relative
	width: 100%
	padding-top: 100%
	transition: all .2s ease-in-out

	.v-skeleton-loader
		position: absolute

.project-item__image
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100%
	object-fit: cover
	object-position: center center
	transition: all .2s ease-in-out
</style>
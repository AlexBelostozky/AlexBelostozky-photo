<template>
	<li class="recent-section__item">
		<a class="project-item__link" :href="projectUrl">
			<div class="project-item__image-wrapper">
				<img
					class="project-item__image"
					:src="projectCoverUrl"
					width="320"
					height="320"
					:alt="`Проект ${ projectName }`"
				>
			</div>

			<span class="project-item__title">{{ projectName }}</span>
		</a>
	</li>
</template>

<script>
export default {
	name: 'ABProjectItem',

	props: {
		projectName: {
			type: String,
			default: 'Проект без названия 🤔'
		},
		projectUrl: {
			type: String,
			default: '/404'
		},
		projectCoverUrl: {
			type: String,
			default: '@images/blank-cover.jpg'
		}
	}
}
</script>

<style lang="sass">
@use "@styles/variables" as *

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

	&:hover
		color: $blue

		.project-item__image
			transform: scale(1.01)

.project-item__image-wrapper
	position: relative
	width: 100%
	padding-top: 100%
	transition: all .2s ease-in-out

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
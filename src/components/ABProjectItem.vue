<template>
	<li class="recent-section__item">
		<a class="project-item__link" :href="projectUrl">
			<img
				class="project-item__image"
				:src="projectCoverUrl"
				width="320"
				height="320"
				:alt="`Проект ${ projectName }`"
			>

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
	font-weight: 500
	font-size: 18px
	line-height: 27px
	color: $black-75
	transition: all .2s ease-in-out

	&:hover
		color: $blue

		.project-item__image
			transform: scale(1.01)

.project-item__image
	transition: all .2s ease-in-out
</style>
<template>
	<div class="gallery">
		<div
			class="gallery__item"
			v-for="(image, key) in images"
			:key="key"
		>
			<img
				class="gallery__image"
				:src="image"
				:alt="key + 'фото проекте' + projectName"
			>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectType } from '@/types/project';

// interface Gallery {
// 	images: ProjectType['images'],
// 	projectName: ProjectType['name'],
// }

export default defineComponent({
	name: 'ABGallery',

	components: {

	},

	props: {
		images: {
			type: Array as PropType<ProjectType['images']> | undefined,
			required: true,
		},
		projectName: {
			type: String as PropType<ProjectType['name']> | undefined,
			required: true,
		},
	},

	// data(): {

	// }
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.gallery
	display: grid
	gap: 20px

.gallery__item
	position: relative
	width: 100%
	overflow: hidden

.gallery__image
	width: 100%
	height: auto
	max-height: 80vh
	object-fit: contain

</style>

<template>
	<v-skeleton-loader
		v-if="!isLoaded"
		class="gallery__item"
		type="image"
		:style="`
			width: ${ imageData.maxWidth };
			height: ${
				imageData.maxWidth &&
				parseFloat(imageData.maxWidth) * imageData.heightRatio
			}px;
		`"
	/>

	<img
		v-show="isLoaded"
		class="gallery__item"
		:src="imageData.url"
		:alt="alt"
		:style="`width: ${ imageData.maxWidth }`"
		@load="handleLoad"
		@error="handleError"
		data-fancybox="gallery-item"
	>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { StyledImageData } from '@/types/project';

export default defineComponent({
	name: 'ABGalleryItem',

	props: {
		imageData: {
			type: Object as PropType<StyledImageData>,
			required: true,
		},
		alt: {
			type: String,
			required: true,
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

.gallery__item
	display: block
	width: auto
	height: auto
	max-width: 100%
	max-height: 85vh
	object-fit: contain

	.v-skeleton-loader__image
		height: inherit
</style>
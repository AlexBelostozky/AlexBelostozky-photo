<template>
	<div class="gallery">
		<div class="container container--mobile-extended">
			<div class="gallery__grid" ref="gallery">
				<div
					class="gallery__item-wrapper"
					v-for="(image, idx) in styledImages"
					:key="idx"
				>
					<ABGalleryItem
						:image-data="image"
						:alt="idx + ' фото проекта ' + projectName"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectType, StyledImageData } from '@/types/project';
import ABGalleryItem from './ABGalleryItem.vue';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css"

interface Gallery {
	maxImageHeightScreenRatio: number,
	maxPortraitWidth: number | null,
	isImagesLoading: boolean,
	styledImages: Array<StyledImageData> | [],
}

export default defineComponent({
	name: 'ABGallery',

	components: {
		ABGalleryItem,
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

	data(): Gallery {
		return {
			maxImageHeightScreenRatio: 0.85,
			maxPortraitWidth: null,
			isImagesLoading: true,
			styledImages: [],
		}
	},

	methods: {
		async mapImages() {
			try {
				this.isImagesLoading = true;

				this.styledImages = await Promise.all(
					this.images.map(async imageData => {
						return {
							url: imageData.url,
							orientation: imageData.width > imageData.height ? 'landscape' : 'portrait',
							naturalWidth: imageData.width,
							naturalHeight: imageData.height,
							heightRatio: imageData.height / imageData.width,
						}
					})
				);

				this.styleImages();
			} catch (error) {
				console.warn('Failed to map images: ', error)
			} finally {
				this.isImagesLoading = false;
			}
		},

		styleImages() {
			try {
				const galleryElement = this.$refs.gallery as HTMLElement;

				const galleryWidth = galleryElement.clientWidth;
				const gapValue = window.getComputedStyle(galleryElement).getPropertyValue('gap');
				const galleryGap = isNaN(parseFloat(gapValue)) ? 20 : parseFloat(gapValue);

				const maxPortraitWidth = galleryWidth / 2 - galleryGap / 2;
				const maxImageHeight = window.screen.height * this.maxImageHeightScreenRatio;

				this.styledImages.forEach(image => {
					if (image.orientation === 'portrait' && image.naturalWidth && image.naturalHeight) {
						const canImageBeFull = galleryWidth * image.heightRatio <= maxImageHeight;

						image.maxWidth = canImageBeFull ? galleryWidth + 'px' : maxPortraitWidth + 'px';
					} else if (image.orientation === 'landscape') {
						image.maxWidth = galleryWidth + 'px';
					}
				});
			} catch (error) {
				console.log('Failed to style images: ', error);
			}
		},
	},

	beforeMount() {
		this.mapImages();
	},

	mounted() {
		window.addEventListener('resize', this.styleImages);

		Fancybox.bind("[data-fancybox]", {
			Carousel: {
				infinite: false,
			},
		});
	},

	beforeUnmount() {
		window.removeEventListener('resize', this.styleImages);
	},
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.gallery__grid
	display: flex
	flex-wrap: wrap
	justify-content: space-evenly
	align-items: center
	gap: 20px

.gallery__item-wrapper
	width: auto
	max-width: 100%
</style>

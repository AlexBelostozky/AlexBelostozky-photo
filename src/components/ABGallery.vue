<template>
	<div class="gallery">
		<div class="container container--mobile-extended">
			<div class="gallery__grid" ref="gallery">
				<div
					class="gallery__item"
					v-for="(image, idx) in styledImages"
					:key="idx"
				>
					<img
						class="gallery__image"
						:class="{'gallery__image--portrait' : image.orientation === 'portrait'}"
						:src="image.url"
						:style="`width: ${image.maxWidth}`"
						:alt="idx + ' фото проекта ' + projectName"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectType } from '@/types/project';
import { getImageDimensions } from '@/utils';
// import { image } from '@cloudinary/url-gen/qualifiers/source';
// import { getImageDimensions } from '@/utils';

interface ImageData {
	url: string,
	orientation: 'landscape' | 'portrait',
	naturalWidth: number | null,
	naturalHeight: number | null,
	maxWidth?: string;
}

interface Gallery {
	maxImageHeight: number,
	maxPortraitWidth: number | null,
	isImagesLoading: boolean,
	styledImages: Array<ImageData> | [],
}

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

	data(): Gallery {
		return {
			maxImageHeight: window.innerHeight * 0.82,
			maxPortraitWidth: null,
			isImagesLoading: true,
			styledImages: [],
		}
	},

	methods: {
		async mapImages() {
			this.maxImageHeight = window.innerHeight * 0.82;

			try {
				this.isImagesLoading = true;

				this.styledImages = await Promise.all(
					this.images.map(async image => {
						const {width, height} = await getImageDimensions(image);
						const safeWidth = width ?? 0;
						const safeHeight = height ?? 0;

						return {
							url: image,
							orientation: safeWidth && safeHeight && safeWidth > safeHeight ? 'landscape' : 'portrait',
							naturalWidth: safeWidth,
							naturalHeight: safeHeight,
						}
					})
				)

				this.styleImages();
			} catch (error) {
				console.warn('Failed to map images: ', error)
			} finally {
				this.isImagesLoading = false;
			}
		},

		styleImages() {
			const galleryElement = this.$refs.gallery as HTMLElement;
			const galleryWidth = galleryElement.clientWidth;
			const computedGalleryStyles = window.getComputedStyle(galleryElement);
			const gapValue = computedGalleryStyles.getPropertyValue('gap');
			const galleryGap = isNaN(parseFloat(gapValue)) ? 20 : parseFloat(gapValue);

			const maxPortraitWidth = galleryWidth / 2 - galleryGap / 2;

			this.styledImages.forEach(image => {
				if (image.orientation === 'portrait' && image.naturalWidth && image.naturalHeight) {
					const heightRatio = image.naturalHeight / image.naturalWidth;

					const canImageBeFull = galleryWidth * heightRatio <= (this.maxImageHeight);

					image.maxWidth = canImageBeFull ? galleryWidth + 'px' : maxPortraitWidth + 'px';
					// console.log(
					// 	'canImageBeFull: ', canImageBeFull,
					// 	'image.maxWidth: ', image.maxWidth,
					// 	'galleryWidth: ', galleryWidth,
					// 	'galleryGap: ', galleryGap
					// );
				}
			});

			this.maxPortraitWidth = maxPortraitWidth;
		}
	},

	beforeMount() {
		this.mapImages();
	},

	mounted() {
		window.addEventListener('resize', this.styleImages)
	},

	beforeUnmount() {
		window.removeEventListener('resize', this.styleImages);
	},

	computed: {
		// maxImageHeight: 9,
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.gallery__grid
	display: flex
	flex-wrap: wrap
	justify-content: space-evenly
	gap: 20px

.gallery__item
	width: auto
	max-width: 100%

.gallery__image
	display: block
	width: auto
	height: auto
	max-width: 100%
	max-height: 82vh
	object-fit: contain
</style>

<template>
	<li class="recent-section__item">
		<div class="project-item__link">
			<v-skeleton-loader
				type="image, list-item"
				:loading="loading"
			>
				<slot />
			</v-skeleton-loader>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ABProjectItemLoader',
	props: {
		loading: {
			type: Boolean,
			default: true
		}
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.project-item__link
	width: 100%

	.v-skeleton-loader__image
		padding-top: 100%
</style>
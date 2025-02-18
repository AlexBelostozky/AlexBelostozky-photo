<template>
	<button
		class="scroll-top-button"
		type="button"
		aria-label="Наверх страницы"
		@click="scrollTop"
	>
		<v-icon size="large" icon="mdil-chevron-up" role="img" aria-hidden="false"></v-icon>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
	name: 'ABScrollTopButton',

	methods: {
		scrollTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *
</style>

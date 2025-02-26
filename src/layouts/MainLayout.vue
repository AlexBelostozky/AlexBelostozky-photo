<template>
	<ABHeader />

	<main class="main">
		<slot />
	</main>

	<ABFooter />
</template>

<script>
import ABHeader from '../components/ABHeader.vue'
import ABFooter from '../components/ABFooter.vue'

export default {
	name: 'MainLayout',

	components: {
		ABHeader,
		ABFooter,
	}
}
</script>

<style lang="sass">
@use "@styles/variables" as *

.main
	display: grid
	align-items: stretch
	flex-grow: 1
	margin: 0
</style>
<template>
	<button
		class="scroll-top-button"
		:class="{'scroll-top-button--hidden': !needShowButton}"
		type="button"
		aria-label="Наверх страницы"
		@click="scrollTop"
	>
		<v-icon size="large" icon="mdil-chevron-up" role="img" aria-hidden="false"></v-icon>
	</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import { throttle } from 'lodash';

export default defineComponent({
	name: 'ABScrollTopButton',
	setup() {
		const needShowButton = ref(false);
		const scrollThreshold = 15;
		const lastScroll = ref(0);
		const throttleDelay = 250;

		const onScroll = () => {
			const currentScroll = window.scrollY;
			if (currentScroll > window.innerHeight) {
				if (currentScroll > lastScroll.value) {
					needShowButton.value = false;
				} else if (currentScroll - scrollThreshold < lastScroll.value) {
					needShowButton.value = true;
				}

				lastScroll.value = currentScroll;
			} else {
				needShowButton.value = false;
			}
		};

		const throttledOnScroll = throttle(onScroll, throttleDelay);

		const scrollTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		};

		onMounted(() => {
			window.addEventListener('scroll', throttledOnScroll);
		});

		onBeforeUnmount(() => {
			window.removeEventListener('scroll', throttledOnScroll);
		});

		return {
			needShowButton,
			scrollTop,
		};
	},
});
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.scroll-top-button
	position: fixed
	right: 40px
	bottom: 55px
	width: 45px
	height: 45px
	background-color: $white-75
	border-radius: 50%
	backdrop-filter: blur(6px)
	box-shadow: 0 0 20px -10px $black-75
	transition: all .3s ease-in-out

	.v-icon
		vertical-align: baseline

	@include screen(sm)
		right: 15px
		bottom: 30px

	&--hidden
		right: calc( 0% - 45px )
</style>

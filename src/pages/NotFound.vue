<template>
	<div class="not-found">
		<div class="container">
			<div class="not-found__grid">
				<div class="not-found__content">
					<h1>404 – Страница не&nbsp;найдена</h1>

					<router-link
						class="not-found__link"
						:to="{name: 'Home'}"
					>Вернуться на&nbsp;главную</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NotFound'
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.not-found
	min-height: 100vh
	background-image: url('@images/404.jpg')
	background-image: image-set(url('@images/404.webp') type('image/webp'), url('@images/404.jpg') type('image/jpeg'))
	background-position: center center
	background-size: cover

	@include screen(sm)
		background-image: url('@images/404-mobile.jpg')
		background-image: image-set(url('@images/404-mobile.webp') type('image/webp'), url('@images/404-mobile.jpg') type('image/jpeg'))

.not-found__grid
	position: relative
	height: 32vh
	padding-top: 140px

	@include screen(sm)
		padding-top: 70px

.not-found__content
	position: sticky
	top: 100px
	box-sizing: border-box
	max-width: 560px
	background-color: $white-75
	backdrop-filter: blur(5px)
	margin: 0 auto
	padding: 40px
	border-radius: 50px

	h1
		margin: 0 0 40px

	.not-found__link
		display: block
		font-size: 18px

	@include screen(sm)
		top: 70px
		max-width: 350px
		padding: 20px
		border-radius: 25px

		h1
			font-size: 20px
			margin: 0 0 20px

		.not-found__link
			font-size: 16px
			line-height: 24px
</style>
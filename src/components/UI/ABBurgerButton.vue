<template>
	<button
		:class="[
			'burger-button',
			{ 'burger-button--expanded': isMenuExpanded }
		]"
		type="button"
		:aria-label="text"
	>
		<div class="burger-burger">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ABBurgerButton',

	props: {
		isMenuExpanded: {
			type: Boolean,
			default: false
		},
		text: {
			type: String,
			default: ''
		}
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *


.burger-button
	display: block
	width: 40px
	height: 40px
	background: transparent
	padding: 0
	border: none
	cursor: pointer

	&--expanded .burger-burger
		div
			transform-origin: 50% 50%
			transform: rotateZ(-135deg)
			opacity: 0

		div:first-child
			transform-origin: 100% 0
			transform: translateX(-4px) translateY(-1px) rotateZ(-45deg)
			opacity: 1

		div:last-child
			transform-origin: 100% 100%
			transform: translateX(-4px) translateY(2px) rotateZ(45deg)
			opacity: 1



.burger-burger
	display: flex
	flex-direction: column
	align-items: center
	gap: 6px

	div
		width: 24px
		height: 1px
		background-color: $white
		border-radius: 1px
		transition: transform .2s ease-in-out, opacity .3s

</style>
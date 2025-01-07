<template>
	<footer class="footer" id="contacts">
		<div class="container">
			<div class="footer__container">
				<ul class="footer__social-list">
					<li class="footer__social-item">
						<a
							class="footer__social-link"
							href="https://www.instagram.com/alexbelostozky/"
							:style="`mask-image: url(${instagramIcon})`"
							target="_blank"
						></a>
					</li>

					<li class="footer__social-item">
						<a
							class="footer__social-link"
							href="https://www.behance.net/alexbelostozky"
							:style="`mask-image: url(${behanceIcon})`"
							target="_blank"
						></a>
					</li>
				</ul>

				<a class="footer__tel-link" href="tel:+79996269606">
					+7 705 804 59 82
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
import instagramIcon from '@images/icons/inst-icon.svg';
import behanceIcon from '@images/icons/behance-icon.svg';

export default {
	name: 'ABFooter',
	props: {

	},

	data() {
		return {
			instagramIcon,
			behanceIcon
		};
	},
}
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.footer
	margin: 0
	padding: 0
	background: $dark-blue-gradient

.footer__container
	display: flex
	justify-content: space-between
	align-items: center
	height: inherit
	margin: auto
	padding: 60px 0

	@include screen(xs)
		flex-direction: column-reverse
		gap: 16px
		padding: 18px 0

.footer__social-list
	display: flex
	justify-content: space-between
	align-items: center
	gap: 30px
	list-style: none
	margin: 0
	padding: 0

.footer__social-link
	display: block
	width: 35px
	height: 35px
	background-color: $white-light
	mask-repeat: no-repeat
	mask-position: center
	mask-size: contain

	&:hover
	opacity: 0.8

	&:active
	opacity: 0.7

	@include screen(sm)
		width: 25px
		height: 25px
		mask-size: 25px 25px
		padding: 5px

.footer__tel-link
	font-weight: 100
	font-size: 28px
	line-height: 33px
	color: $white

	@include screen(sm)
		font-size: 18px
		line-height: normal
</style>
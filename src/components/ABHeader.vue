<template>
	<header :class="[
			'header',
			{'header--opened': isMobileMenuShown}
		]"
	>
		<div class="container">
			<div class="header__container">
				<a
					:href="isNotHomePage ? '/' : undefined"
					:aria-label="isNotHomePage ? 'На главную' : undefined"
				>
					<img
						class="header__logo"
						src="@images/logo.png"
						width="240px"
						alt="Логотип"
					>
				</a>

				<nav class="header__navigation" id="top">
					<ABBurgerButton
						class="header__navigation-button"
						v-if="isMobile"
						:isMenuExpanded="isMobileMenuShown"
						:text="isMobileMenuShown ? 'Скрыть меню' : 'Открыть меню'"
						@click="toggleMenu()"
					/>

					<ul
						class="header__navigation-list"
						v-show="!isMobile || isMobileMenuShown"
					>
						<li class="header__navigation-item">
							<a
								class="header__navigation-link"
								href="#about"
								@click="toggleMenu(false)"
							>Обо мне</a>
						</li>

						<li class="header__navigation-item">
							<a
								class="header__navigation-link"
								href="#works"
								@click="toggleMenu(false)"
							>Мои работы</a>
						</li>

						<li class="header__navigation-item">
							<a
								class="header__navigation-link"
								href="#contacts"
								@click="toggleMenu(false)"
							>Контакты</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import ABBurgerButton from './UI/ABBurgerButton.vue';

export default defineComponent({
	name: 'ABHeader',

	props: {

	},

	data(): {
		isMobileMenuShown: boolean;
		isMobile: boolean
	} {
		return {
			isMobileMenuShown: false,
			isMobile: false,
		}
	},

	setup() {
		const route = useRoute();

		return {
			route,
		};
	},

	computed: {
		isNotHomePage(): boolean {
			return this.route.path !== '/';
		}
	},

	methods: {
		toggleMenu(forceShow: boolean | undefined = undefined) {
			this.isMobileMenuShown = !this.isMobileMenuShown;

			if (forceShow !== undefined) {
				this.isMobileMenuShown = forceShow;
			}

			this.isMobileMenuShown ? this.blockBody() : this.unblockBody();
		},

		blockBody() {
			document.body.classList.add('blocked-scroll');
		},

		unblockBody() {
			document.body.classList.remove('blocked-scroll');
		},

		checkIfMobile() {
			this.isMobile = window.innerWidth <= 768;
		},

		onWindowResize() {
			this.checkIfMobile();
			this.toggleMenu(false);
		}
	},

	mounted() {
		this.checkIfMobile();
		window.addEventListener('resize', this.onWindowResize);
	},

	beforeUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	},

	components: {
		ABBurgerButton,
	}
})
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.header
	position: fixed
	top: 0
	width: 100%
	height: auto
	background-color: rgba(0, 0, 0, 0.75)
	backdrop-filter: blur(50px)
	z-index: 1
	margin: 0

	@include screen(sm)
		height: 40px

		&--opened
			backdrop-filter: unset

.header__container
	display: flex
	justify-content: space-between
	align-items: center
	gap: 60px

.header__logo
	display: block
	width: 240px
	height: auto

	@include screen(sm)
		width: 185px

.header__navigation-list
	display: flex
	justify-content: flex-end
	gap: min(20px, 1.3vw)
	list-style: none
	margin: 0
	padding: 0

	@include screen(sm)
		position: absolute
		top: 0
		left: 0
		right: 0
		flex-direction: column
		justify-content: flex-start
		align-items: flex-end
		height: 100dvh
		background-color: $black-75
		padding: 40px min(5vw, 24px)
		backdrop-filter: blur(50px)
		z-index: -1

.header__navigation-item
	margin: 0
	padding: 0

.header__navigation-link
	display: block
	font-weight: 100
	font-size: 18px
	color: $white
	margin: 0
	padding: 15px
	border-radius: 2px
	transition: all .2s ease-in-out

	&:visited
		color: $white

	&:hover
		color: $white
		background-color: rgba(128, 128, 128, 0.7)

	@include screen(sm)
		&:hover
			background-color: transparent
</style>
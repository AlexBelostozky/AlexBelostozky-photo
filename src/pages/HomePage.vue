<template>
	<section class="about-section">
		<div class="container" id="about">
			<div class="about-section__grid">
				<div class="about-section__portrait">
					<picture>
						<source srcset="@images/content/portrait.webp" type="image/webp">

						<img
							src="@images/content/portrait.png"
							width="248"
							height="248"
							alt="Александр Белостоцкий"
						>
					</picture>
				</div>

				<div class="about-section__story">
					<h1 class="about-section__story-heading">Искусство во&nbsp;всём</h1>

					<p class="about-section__story-text">
						Ну&nbsp;или&nbsp;почти во&nbsp;всём 😀
					</p>

					<p class="about-section__story-text">
						Так уж&nbsp;сложилось, что&nbsp;подавляющая часть того,
						что&nbsp;мы&nbsp;видим каждый день, можем потрогать, используем
						в&nbsp;своей повседневной жизни создано людьми. Но&nbsp;с&nbsp;какого-то
						момента я&nbsp;начал воспринимать некоторые вещи как&nbsp;объекты
						искусства. И&nbsp;убеждён, что&nbsp;в&nbsp;любой вещи можно
						его&nbsp;найти. Ведь каждая вещь так&nbsp;или&nbsp;иначе характеризует
						мир, в&nbsp;котором мы&nbsp;живём, является срезом культуры того времени,
						когда она &nbsp;была создана. И&nbsp;это&nbsp;отчасти является причиной
						основной тематики моих фотографий.
					</p>

					<p class="about-section__story-text">
						Автомобили, особенно которые

						<a
							href="https://www.instagram.com/explore/tags/такихуженеделают/"
							target="_blank"
						>#ТакихУжеНеДелают</a>,

						являются результатом творчества огромного числа инженеров, дизайнеров
						и&nbsp;учёных. Именно поэтому я&nbsp;чувствую огромное желание запечатлеть
						эти&nbsp;образцы культуры и&nbsp;показать их&nbsp;вам.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="recent-section" id="works">
		<div class="container">
			<ul class="recent-section__list">
				<ABProjectItem
					v-for="project in recentProjects"
					:key="project.url"
					:projectName="project.name"
					:projectUrl="project.url"
					:projectCoverUrl="project.coverUrl"
				/>
			</ul>
		</div>
	</section>
</template>

<script>
import ABProjectItem from '@/components/ABProjectItem.vue';

export default {
	name: 'HomePage',

	props: {

	},

	data: () => {
		return {
			recentProjects: [
				{
					'name': 'Celsior',
					'coverUrl': require('@images/content/projects/celsior/celsior-cover.jpg'),
					'url': '/celsior'
				},
				{
					'name': 'Laurel',
					'coverUrl': require('@images/content/projects/laurel/laurel-cover.jpg'),
					'url': '/laurel'
				},
				{
					'name': 'Mark II',
					'coverUrl': require('@images/content/projects/mark/mark-cover.jpg'),
					'url': '/mark'
				},
				{
					'name': 'Museum',
					'coverUrl': require('@images/content/projects/museum/museum-cover.jpg'),
					'url': '/museum'
				},
				{
					'name': '2104',
					'coverUrl': require('@images/content/projects/2104/2104-cover.jpg'),
					'url': '/2104'
				},
				{
					'name': 'Cresta',
					'coverUrl': require('@images/content/projects/cresta/cresta-cover.jpg'),
					'url': '/cresta'
				},
			]
		}
	},

	components: {
		ABProjectItem,
	}
}
</script>

<style lang="sass">
@use "@styles/variables" as *
@use "@styles/mixins" as *

.about-section
	background-image: image-set(url('@images/bg.webp') type('image/webp'), url('@images/bg.jpg') type('image/jpeg'))
	background-repeat: no-repeat
	background-size: 100% 100%
	background-position: center
	background-size: cover
	padding: 120px 0 70px

.about-section__grid
	display: grid
	grid-template-columns:  284px 1fr
	gap: 56px
	width: 100%
	margin: 0 auto

	@include screen(sm)
		display: block

.about-section__portrait
	img
		width: 100%
		height: auto

.about-section__story
	color: $white
	font-family: $font-sf
	font-style: normal

.about-section__story-heading
	font-weight: 600
	font-size: 48px
	line-height: 57px
	text-align: left
	margin: 0 0 24px

.about-section__story-text
	font-weight: 400
	font-size: 18px
	line-height: 27px
	letter-spacing: -0.03em
	text-align: left
	margin: 0 0 16px

	a
		color: $orange

		&:visited
			color: $orange

.recent-section
	padding: 50px 0

.recent-section__list
	display: grid
	grid-template-columns:  1fr 1fr 1fr
	grid-column-gap: 20px
	grid-row-gap: 36px
	list-style: none
	margin: 0px
	padding: 0px

	@include screen(sm)
		grid-template-columns:  1fr 1fr

	@include screen(xs)
		grid-template-columns:  1fr
</style>
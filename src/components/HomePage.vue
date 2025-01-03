<template>
	<section class="about-section">
		<div id="about" class="about-container">
			<div class="portrait">
				<img src="img/portrait.png" width="248" height="248" alt="Портрет">
			</div>

			<div class="story">
				<h1 class="story-head">Искусство во всём</h1>

				<p class="story-body">
					Ну или почти во всём 😀
				</p>

				<p class="story-body">
					Так уж сложилось, что подавляющая часть того, что мы видим каждый<br>
					день, можем потрогать, используем в своей повседневной жизни<br>
					создано людьми. Но с какого-то момента я начал воспринимать<br>
					некоторые вещи как объекты искусства. И убеждён, что в любой вещи<br>
					можно его найти. Ведь каждая вещь так или иначе характеризует мир,<br>
					в котором мы живём, является срезом культуры того времени, когда она<br>
					была создана. И это отчасти является причиной основной тематики моих<br>
					фотографий.
				</p>

				<p class="story-body">
					Автомобили, особенно которые <a href="https://www.instagram.com/explore/tags/такихуженеделают/"
						target="_blank" class="tag">#ТакихУжеНеДелают</a>, являются<br>
					результатом творчества огромного числа инженеров, дизайнеров<br>
					и учёных. Именно поэтому я чувствую огромное желание запечатлеть<br>
					эти образцы культуры и показать их вам.
				</p>
			</div>
		</div>
	</section>

	<section id="works" class="works-section">
		<div class="photo-gallery">
			<ul class="albums" type="none">
				<li>
					<a href="celsior.html" class="album-link">
						<img src="content/celsior/celsior-cover.jpg" width="320" height="320"
							alt="Альбом Toyota Celsior">

						<p class="album-link-title">Celsior</p>
					</a>
				</li>

				<li>
					<a href="laurel.html" class="album-link">
						<img src="content/laurel/laurel-cover.jpg" width="320" height="320" alt="Альбом Nissan Laurel">

						<p class="album-link-title">Laurel</p>
					</a>
				</li>

				<li>
					<a href="mark.html" class="album-link">
						<img src="content/mark/mark-cover.jpg" width="320" height="320" alt="Альбом Toyota Mark II">

						<p class="album-link-title">Mark II</p>
					</a>
				</li>

				<li>
					<a href="museum.html" class="album-link">
						<img src="content/museum/museum-cover.jpg" width="320" height="320"
							alt="Альбом музей Ника Панули">

						<p class="album-link-title">Museum</p>
					</a>
				</li>

				<li>
					<a href="2104.html" class="album-link">
						<img src="content/2104/2104-cover.jpg" width="320" height="320" alt="Альбом Lada 2104">

						<p class="album-link-title">2104</p>
					</a>
				</li>

				<li>
					<a href="cresta.html" class="album-link">
						<img src="content/cresta/cresta-cover.jpg" width="320" height="320" alt="Альбом Toyota Cresta">

						<p class="album-link-title">Cresta</p>
					</a>
				</li>

			</ul>
		</div>
	</section>
</template>

<script>
export default {
  name: 'HomePage',
  props: {

  }
}
</script>

<style lang="sass">
@use "@styles/variables" as *

</style>
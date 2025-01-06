<template>
	<div class="container">
		<div class="not-found">
			<h1>404 – Страница не найдена</h1>

			<p>Такой страницы не существует.</p>

			<router-link :to="{name: 'Home'}">
				Вернуться на главную
			</router-link>
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


</style>
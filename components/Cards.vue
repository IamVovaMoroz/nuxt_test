<template>

	<ul>

		<li v-for=" card in arrayCards" :key="card.name">
			<img :src="card.src" :alt="card.alt">
	{{ card.name }} - {{ card.age }} - {{ card.alt }}
		</li>

	</ul>
</template>
<!-- мммм -->
<script>
import { defineComponent } from 'vue';
export default defineComponent(
	{
		name: 'Cards',
		setup() {

			const arrayCards = [
				{ name: 'user1', age: 12, src: 'https://cdn2.thecatapi.com/images/435.jpg', alt: 'cat1' },
				{ name: 'user2', age: 12, src: 'https://cdn2.thecatapi.com/images/567.jpg', alt: 'cat2' },

			]
			return {
				arrayCards
			}
		}
	})
</script>

<style lang="scss" scoped></style>

<script setup>

import { provide } from 'vue';

import InjectComponent from '~/components/InjectComponent.vue';

//Provide array
provide('friends', ['Alex', 'Alex2', 'Alex3', 'Alex4',])
//Provide object
provide('games', {id: 1, title: 'marvel game', year: 1990, genre: ['Action', 'Adventure'], develop: {
	name: 'Best studio',
	location: 'New-York'}})
//Provide array of objects
provide('allGames', [
  { id: 1, title: 'Marvel Game', year: 1990, genre: ['Action', 'Adventure'] },
  { id: 2, title: 'Superhero Game', year: 2005, genre: ['Action', 'RPG'] },
  { id: 3, title: 'Adventure Island', year: 1995, genre: ['Adventure', 'Puzzle'] }
]);




</script>

<template>
	<div class="border">
		<h1>TEST4 Practice</h1>

<InjectComponent/>



	</div>
</template>
<script setup>



import { inject } from 'vue';

const friendsList = inject('friends')
const games = inject('games')
const gamesList = inject('allGames')

</script>

<template>
	<div class="border">
		<h1>Inject component</h1>

		<!-- Array inject-->
		<h1>Array inject</h1>
		<ul v-for="(friend, index) in friendsList" :key="index">
			<li>{{ friend }}</li>

		</ul>
		<hr>
		<!-- Object inject-->
		<h1>Object inject</h1>

		<ul v-for="(game, index) in games" :key="index">
			<li>{{ game }}</li>

		</ul>
		<hr>
		<h1>Injecting array of objects</h1>

		<ul v-for="(gameList, index) in gamesList" :key="index">
			<li>{{ gameList }}</li>
		</ul>

		<hr>

		<h1>Injecting array of objects Destructuring</h1>

		<ul v-for="({ id, title, year, genre }, index) in gamesList" :key="index">
			<li>{{ id }}</li>
			<li>{{ title }}</li>
			<li>{{ year }}</li>
			<li>
				<ul>
					<li v-for="(g, i) in genre" :key="i">[{{ g }}]</li>
				</ul>
			</li>


		</ul>

	</div>
</template>
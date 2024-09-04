<script setup>

import { watch, reactive } from 'vue';

const state = reactive({ username: 'vova' })

watch(
	() => state.username, (newValue, oldValue) => {
		console.log('new value', newValue) // new value new vova
		console.log('oldValue value', oldValue)
	})

// watch(state, (newValue, oldValue)=>{
// 	console.log('new value', newValue) // Proxy(Object) {username: 'new vova'}
// 	console.log('oldValue value', oldValue)
// })

</script>

<template>
	<div class="border">
		<h1>Reactive Object Watcher</h1>

		<h1>{{ state.username }}</h1>
		<button @click="state.username = 'new vova'" class="border">Change name</button>

	</div>
</template>
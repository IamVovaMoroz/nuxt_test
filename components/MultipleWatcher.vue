<script setup>
import { ref, watch } from 'vue';

const username = ref('jordan')
const counter = ref(0)

watch([username, counter], (newValue, oldValue) => {
	console.log('newValue', newValue)
	console.log('oldValue', oldValue)
})

</script>

<template>
	<div class="border">
		<h1>Multiple watcher</h1>

		<h1>{{ username }}</h1>
		<h1> Counter: {{ counter }}</h1>

		<button @click="username = 'new Jordan'" class="border">Change Name</button>
		<button @click="counter++" class="border">Increment counter</button>

	</div>
</template>
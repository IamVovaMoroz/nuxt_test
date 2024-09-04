<script setup>

import { ref, watch } from 'vue'

const message = ref('Hello, Vue!')
const inputText = ref('default message')
//watch for changes in InputText
watch(inputText, (newValue, oldValue) => {
// you can add some logic here when inputText changes
console.log('newValue',newValue)
console.log('oldValue', oldValue)
message.value = `You typed: ${newValue}`
}
)
</script>

<template>
	<div class="border">
		<h1>Basic Watcher</h1>

		<h1>{{ message }}</h1>
		<input class="border" type="text" v-model="inputText" placeholder="Type something">

	</div>
</template>
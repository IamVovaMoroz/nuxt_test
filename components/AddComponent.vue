<script setup>
const myMessage = 'TEXT FROM SCRIPT {{ }} - this is JS area'

function add(x, y) {
	return x + y
}

</script>

<template>
	<div>
		<h1 class="border bg-slate-500">Add children component</h1>
		<h2>{{ myMessage }}</h2>
		<h2> 2 + 2 = {{ 2 + 2 }}</h2>
		<h2> Add two numbers from function = {{ add(2, 2) }}</h2>
	</div>
</template>
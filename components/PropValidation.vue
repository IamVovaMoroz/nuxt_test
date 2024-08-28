<script setup>

// const props = defineProps(['car', 'model', 'year'])
// const props = defineProps({
// 	car: String,
// 	model: String,
// 	year: Number,
// })

const props = defineProps({
	car: {type: String, required: true, default: 'default name car'},
	model: String,
	year: Number,
})



</script>

<template>
	<div class="border">
		<h1> PropValidation </h1>
		<h1>{{ props.car }}</h1>
		<h1>{{ props.model }}</h1>
		<h1>{{ props.year }}</h1>

	</div>
</template>
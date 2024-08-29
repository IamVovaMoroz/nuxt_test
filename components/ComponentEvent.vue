<script setup>



</script>

<template>
	<div class="border">
		<h1>Component Event</h1>

		<button @click="$emit('incrementCounter')">+</button>


	</div>
</template>
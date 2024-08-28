<script setup>

const props = defineProps(['name'])
console.log('props',props)
</script>

<template>
	<div class="border">
		<h1>Static Props Comp</h1>
		<h1>{{props.name}}</h1>



	</div>
</template>
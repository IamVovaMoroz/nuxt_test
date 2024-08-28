<script setup>

const props = defineProps(['name', 'lastName'])
console.log('props',props)

// const propsChange = props.lastName = 'colya change'
</script>

<template>
	<div class="border">
		<h1>Dynamic Props Comp</h1>

		<h1>{{props.name}}</h1>

		<h1>{{props.lastName}}</h1>

		<!-- <h1>{{propsChange}}</h1> -->

	</div>
</template>
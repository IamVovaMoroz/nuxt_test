<script setup>
import { ref, computed } from "vue"

const number = ref(5)

const squaredNumber = computed(() => {
	return number.value * number.value
	// 


})

const firstName = ref('Volodymyr')
const lastName = ref('FullStack')

const fullName = computed(() => {
	return firstName.value + ' ' + lastName.value
})

</script>

<template>
	<div class="border">
		<h1>Computed Properties</h1>

		<h1>Original Number : {{ number }}</h1>
		<h1>Original Number : {{ squaredNumber }}</h1>
		<!--  -->
		<h1>first Name : {{ firstName }}</h1>
		<h1>Last Name : {{ lastName }}</h1>
		<h1>Full Name : {{ fullName }}</h1>
	</div>

</template>
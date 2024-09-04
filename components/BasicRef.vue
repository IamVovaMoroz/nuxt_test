<script setup>

import {onMounted, ref} from 'vue';

const myRef = ref('')
// console.log(myRef.value)

onMounted(()=>{
	console.log('Input value:', myRef.value)
	myRef.value.focus()
	myRef.value.value = 'info from onMounted to input'
})

</script>

<template>
	<div class="border">
	<h1>Basic ref children here</h1>

<input type="text" placeholder="Enter your name" ref="myRef">


</div>
</template>
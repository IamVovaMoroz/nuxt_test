<script setup>

import {useCounter} from '../composable/useCounter.js'

const counter = useCounter()

// import {ref} from 'vue'

// let count = ref(0)


// const increment = () => count.value++
// const decrement = () => count.value--

</script>

<template>
<!-- The Solution is to extract off the logic from this component and create a separate Composable

Creating a separate composable will allow us to reuse that logic in overall application -->
	<div class="border">
	<h1>Composable component</h1>

	<!-- <h1>Count: {{count}} </h1> -->

	<h1>{{counter.count}}</h1>
<!-- <button @click='increment' class="border">+</button>
<button @click='decrement' class="border">-</button> -->
<button @click='counter.increment' class="border">+</button>
<button @click='counter.decrement' class="border">-</button>

</div>
</template>
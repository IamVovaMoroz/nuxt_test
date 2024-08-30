<script setup>

// defineProps(['studentName', 'studentAge', 'studentLocation'])

import { inject } from 'vue';

const studentName = inject('studentName')
const studentAge = inject('studentAge')
const studentLocation = inject('studentLocation')

</script>

<template>
	<div class="border">
	<h1>Student component CHILDREN Brother</h1>

	<h1>{{ studentName }}</h1>
	<h1>{{ studentAge }}</h1>
	<h1>{{ studentLocation }}</h1>

</div>
</template>
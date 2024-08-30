<!-- <script setup>



const studentName = 'Alex'
const studentAge = 20
const studentLocation = ['Switzerland', 'Ukraine']

</script>

<template>
	<div class="border">
		<h1>TEST3</h1>

		<SchoolComponent :studentName="studentName" :studentAge="studentAge" :studentLocation="studentLocation" />



	</div>
</template> -->

<script setup>

import { provide } from 'vue';

provide('studentName', 'Alex')
provide('studentAge', 20)
provide('studentLocation', ['Switzerland', 'Ukraine'])

// const studentName = 'Alex'
// const studentAge = 20
// const studentLocation = ['Switzerland', 'Ukraine']

</script>

<template>
	<div class="border">
		<h1>TEST3</h1>

		<SchoolComponent />



	</div>
</template>
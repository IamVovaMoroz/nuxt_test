<script setup>
// import Vfor from '@/components/Vfor.vue';

import { ref } from 'vue'
const name = ref('Vova dynamic ref')
// const name = 'Vova dynamic'
const lastName = 'Moroz dynamic'

const car = 'BMW';
const model = 'S';
const year = 2006;
</script>

<template>
	<div class="border">
		<h1>Test</h1>

		<ComputedProperties />
		<ConditionalRendering />
		<Vfor/>
		<Vmodel/>
		<StaticPropsComponent name="Vova"/>
		<DynamicPropsComponent :name="name" :lastName="lastName"/>
		<PropValidation :car="car" :model="model" :year="year"/>
		 <!-- static only -->
		<!-- <PropValidation car="BMW" model="S" year="2006"/> -->
	</div>
</template>
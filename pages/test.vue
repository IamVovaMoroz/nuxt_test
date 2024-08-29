<script setup>
// import Vfor from '@/components/Vfor.vue';

import { Vmodel } from '#build/components';
import { ref } from 'vue'
const name = ref('Vova dynamic ref')
// const name = 'Vova dynamic'
const lastName = 'Moroz dynamic'

const car = 'BMW';
const model = 'S';
const year = 2006;


const formHandlerConsole = (username, email, password) => {
	console.log('username see in parent', username)
	console.log('email see in parent', email)
	console.log('password see in parent', password)
}
</script>

<template>
	<div class="border">
		<h1>Test</h1>

		<ComputedProperties />
		<ConditionalRendering />
		<Vfor/>
		<!-- <Vmodel @userInfo="formHandlerConsole"/> -->
		<StaticPropsComponent name="Vova"/>
		<DynamicPropsComponent :name="name" :lastName="lastName"/>
		<PropValidation :car="car" :model="model" :year="year"/>
		 <!-- static only -->
		<!-- <PropValidation car="BMW" model="S" year="2006"/> -->
	</div>
</template>
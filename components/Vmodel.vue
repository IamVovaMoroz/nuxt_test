<script setup>
import { ref } from 'vue';
// const formData = ref({ username: '', email: '', password: '' })

const username = ref('')
const email = ref('')
const password = ref('')

// const handleSubmit = () => {
//     alert(`Username: ${formData.value.username}\nEmail: ${formData.value.email}\nPassword: ${formData.value.password}`);}
</script>

<template>
	<div class="border">
		<h1>FORM FORM</h1>
		<!-- <form action="" @submit.prevent="handleSubmit"> -->

<!-- 
			<form action="" @submit.prevent="$emit('userInfo', username, email, password)">
			<input type="text" placeholder="Enter your name" v-model="formData.username">
			<input type="text" placeholder="Enter your email" v-model="formData.email">
			<input type="text" placeholder="Enter your password" v-model="formData.password"> -->

			<!--  -->

			<form action="" @submit.prevent="$emit('userInfo', username, email, password)">
			<input type="text" placeholder="Enter your name" v-model="username">
			<input type="text" placeholder="Enter your email" v-model="email">
			<input type="text" placeholder="Enter your password" v-model="password">
			<button type="submit">submit</button>
		</form>
		<h1>{{ username }}</h1>
		<h1>{{ email }}</h1>
		<h1>{{ password }}</h1>
	</div>
</template>
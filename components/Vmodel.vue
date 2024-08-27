<script setup>
import { ref } from 'vue';
const formData = ref({ username: '', email: '', password: '' })

const handleSubmit = () => {
    alert(`Username: ${formData.value.username}\nEmail: ${formData.value.email}\nPassword: ${formData.value.password}`);}
</script>

<template>
	<div class="border">
		<form action="" @submit.prevent="handleSubmit">
			<input type="text" placeholder="Enter your name" v-model="formData.username">
			<input type="text" placeholder="Enter your email" v-model="formData.email">
			<input type="text" placeholder="Enter your password" v-model="formData.password">
			<button type="submit">submit</button>
		</form>
		<h1>{{ formData.username }}</h1>
		<h1>{{ formData.email }}</h1>
		<h1>{{ formData.password }}</h1>
	</div>
</template>
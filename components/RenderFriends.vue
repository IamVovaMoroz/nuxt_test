<script setup>

const friends = ref(['Axel', 'Ura', 'Sasha'])

</script>

<template>
	<div class="border">
	<h1>Render Friends</h1>


<h2 v-for="(friend, i) in friends" :key="i"><h1>{{friend}}</h1></h2>

</div>
</template>
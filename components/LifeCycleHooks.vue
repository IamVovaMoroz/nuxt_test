<script setup>
import { ref } from 'vue';

const message = ref('Hello, LifeCycleHooks');

const changeFunction = () => {
	message.value = 'new message'
}

</script>

<template>
  <div class="border">
    <h1>LifeCycleHooks</h1>
    <p>{{ message }}</p>
	<button @click="changeFunction">Update message</button>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const showHide = ref(true)

</script>

<template>
	<div class="border">
	<h1>TEST5</h1>

<LifeCycleComponent v-if="showHide"/>
<button @click="showHide = !showHide">Show / Hide</button>

</div>
</template>
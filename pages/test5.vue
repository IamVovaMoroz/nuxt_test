<script setup>


import { ref } from 'vue';
import Lesson1 from '~/components/Lesson1.vue';
const showHide = ref(true)

</script>

<template>
	<div class="border">
	<h1>TEST5</h1>
	
<LifeCycleComponent v-if="showHide"/>
<button @click="showHide = !showHide">Show / Hide</button>
<hr>
<BasicWatcher/>

<hr>
<ReactiveObjectWatcher/>
<hr>
<MultipleWatcher/>

<hr>
<Lesson1/>
</div>
</template>
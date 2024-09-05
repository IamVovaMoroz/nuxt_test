<script setup>
//  loading components only when needed, you can reduce the initial bundle size and improve the application's performance.
import {ref, defineAsyncComponent} from 'vue'
const RenderFriends = defineAsyncComponent(()=>import('./RenderFriends.vue'))

let showFriends = ref(false)

const toggleFriends = () =>{showFriends.value = !showFriends.value}

</script>

<template>
	<div class="border">
	<h1>Toggle Friends</h1>
<hr>

<div v-if='showFriends'>
	<RenderFriends/>
</div>
<button @click='toggleFriends'>Toggle friends list</button>

<p>{{showFriends.value}}</p>

</div>
</template>
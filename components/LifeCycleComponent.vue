<script setup>

import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const message =ref('Hello Lifecycle Hooks')

// Lifecycle Hooks
// onBeforeMount
onBeforeMount(()=> {
	console.log(' onBeforeMount - Component is about to be mounted')

	// Example: Initialize some data
	// message.value = 'Preparing to mount...';
})
// onMounted
onMounted(()=>{
	console.log(' onMounted - Component has been mounted')
	 // Example: Fetch data from an API
	//  fetchData();
})


//onBeforeUpdate
onBeforeUpdate(()=>{
	console.log(' onBeforeUpdate - Component is about to update')
	// Example: Save current state before update
	// saveCurrentState();

})

//onUpdated
onUpdated(()=>{
	console.log('onUpdated - Component has been updated')
	  // Example: Log the updated state
	//   logUpdatedState();
})


//onBeforeUnmount

onBeforeUnmount(()=>{
	console.log('onBeforeUnmount - component is about to be unmounted')
	 // Example: Remove event listeners
	//  removeEventListeners();
})

//onUnmounted

onUnmounted(()=>{
	console.log('onUnmounted - component has been unmounted')
	 // Example: Clear timers or intervals
	//  clearTimers();
})

const updateMessage = ()=>{
	message.value = 'the message was updated function'

}

</script>

<template>
	<div class="border">
	<h1>LifeCycleComponent</h1>
<p>{{ message }}</p>
<button @click="updateMessage" class="border bg-slate-500">Update message</button>



</div>
</template>
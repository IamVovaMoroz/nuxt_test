<script setup>
import { ref, reactive } from 'vue'

// Single reactive value using ref
let count = ref(0)

// Reactive object using reactive
let countReactive = reactive({ count: 0 })
let initialStateObject = reactive({ val: { count: 0 } , user: ['Volod', 'Alona']})

// Increment and decrement functions for 'count' (ref)
const incrementCounter = () => count.value++
const decrementCounter = () => count.value--

// Form submission handler
const submitHandler = (e) => {
  e.preventDefault()
  alert('Valid Credentials')
}

// Show message function
const showMessage = (message) => alert(message)

// change User function

const changeUser = () => {
	initialStateObject.user[0] = 'VolChange',
	initialStateObject.user[1] = 'AlonaChange'
}

</script>

<template>
  <div class="scroll-container">
    <h1>My Event</h1>

    <!-- Section 1: Count with ref -->
    <div class="section">
      <h2>Section 1: Ref Example</h2>
      <h3>Count (ref): {{ count }}</h3>
      <button class="button" @click="incrementCounter">Increment</button>
      <button class="button" @click="decrementCounter">Decrement</button>
    </div>

    <!-- Section 2: Button to show a message -->
    <div class="section">
      <h2>Section 2: Show Message Example</h2>
      <button class="button" @click="showMessage('This is my message')">Show Message</button>
    </div>

    <!-- Section 3: Count with reactive object -->
    <div class="section">
      <h2>Section 3: Reactive Object Example</h2>
      <h3>CountReactive (reactive): {{ countReactive.count }}</h3>
      <button class="button" @click="countReactive.count++">Reactive Click +1</button>
	  <button class="button" @click="countReactive.count--">Reactive Click -1</button>
    </div>

    <!-- Section 4: Count with reactive object -->

	<div class="section">
      <h2>Section 4: Reactive Big Object Example</h2>
      <h3>initialStateObject (reactive) val.count: {{ initialStateObject.val.count }}</h3>
	  <h3>initialStateObject (reactive) val.user: {{ initialStateObject.user }}</h3>
	 <button class="button" @click="initialStateObject.val.count+=10">Add +10 </button>
	 <button class="button" @click="changeUser">Change User </button>
	 <button class="button" @click="initialStateObject.user.push('Daniel')">Add 1 User </button>
      <!-- <button class="button" @click="countReactive.count++">Reactive Click +1</button>
	  <button class="button" @click="countReactive.count--">Reactive Click -1</button> -->
    </div>


    <!-- Section 5: Form with submit handler -->
    <div class="section">
      <h2>Section 5: Form Example</h2>
      <form @submit="submitHandler">
        <input class="input" type="text" placeholder="Enter your name" />
        <input class="input" type="email" placeholder="Enter your email" />
        <button class="button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Scrollable container with limited height */
.scroll-container {
  max-height: 400px; /* Adjust the height as needed */
  overflow-y: auto;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

/* General styling for sections */
.section {
  margin: 20px 0;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
}

/* Styling for buttons */
.button {
  margin-right: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

/* Styling for input fields */
.input {
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

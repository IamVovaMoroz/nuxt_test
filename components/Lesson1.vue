<template>
  <div class="border">
    <h1>Hello, {{ name }}</h1>

<!--  -->
    <div class="container">
      <button @click="flag = !flag"> click</button>
      <!-- <button v-on:click="flag =!flag"> click</button> -->
      <p v-if="flag">Flag is true</p>
      <p v-else>Flag is false</p>
      <p v-if="!flag">Flag is false</p>
    </div>
<!--  -->
    <div class="container-2">
      <!-- <button @click="counter = counter + 1"> click +</button> -->
      <button @click="incrementCounter"> click +</button>
      <p>{{ counter }}</p>
    </div>
    <!--  two-way data binding v-model="text"  => we save data from input to const text and then  <p>{{ text }}</p>-->
 <div class="container-3">
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
  
  
  </div>
</template>
 


 

<script setup>
import { ref } from 'vue';
// const counter = ref(0)
const incrementCounter = () => {
  counter.value += 1;
};
const name = 'Vova here'
const flag = ref(true)


const message = ref('')
</script>

<!-- <script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
   const name = 'Vova here'

    const flag = ref(true)
    return {
      name,
      flag
    };
  }
});
</script> -->

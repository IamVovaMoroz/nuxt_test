<script setup>
const cars = [
  { id: 1, make: 'Toyota', model: 'Corolla', year: 2010, description: { age: 14, location: ['Los Angeles', 'San Francisco'] }},
  { id: 2, make: 'Honda', model: 'Civic', year: 2015, description: { age: 9, location: ['New York', 'Boston'] }},
  { id: 3, make: 'Ford', model: 'Focus', year: 2018, description: { age: 6, location: ['Chicago', 'Detroit'] }},
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2022, description: { age: 2, location: ['Miami', 'Orlando'] }},
];

const carDescription = {
  mileage: 80000,  // Average mileage across cars
  color: 'Gray',  // Default color if none is specified
  condition: 'Used',  // Default condition
  previousOwners: 2,  // Average number of previous owners
  location: ['Various Locations'],  // Generic location
  fuelType: 'Gasoline',  // Default fuel type
  transmission: 'Automatic',  // Default transmission type
  features: ['Air Conditioning', 'Bluetooth', 'Backup Camera'],  // Common features
};

// Count Event
import { ref } from 'vue';
import Slot from '~/components/Slot.vue';

let count = ref(0)

const formHandlerConsole = (username, email, password) => {
	console.log('username see in parent', username)
	console.log('email see in parent', email)
	console.log('password see in parent', password)
}

</script>

<template>
	<div class="border">
	<h1>TEST 1</h1>
	<h1>Count: {{ count }}</h1>
	<ComponentEvent @incrementCounter="count++"/>



<!-- <ComplexProps :cars="cars" :carDescription="carDescription"/> -->
 <!-- @userInfo from children component. formHandlerConsole -in parent -what we need to do with this data -->
<Vmodel @userInfo="formHandlerConsole"/>

<hr>


<!-- <Slot>

	<h1>Content from parent to children Slot</h1>
	<h1>Content 2 from parent to children Slot</h1>

	
</Slot> -->
<DefaultContentSlot>
	<p>Default content is working, and doent work content from children component in slot</p>
</DefaultContentSlot>
</div>
</template>
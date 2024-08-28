<script setup>

const props = defineProps({
	cars: {
		type: Array,
		required: true, // This makes sure the prop is required
	},
	carDescription: {
		type: Object,
		required: true, // This makes sure the prop is required
	},
})

const formattedCars = computed(() => {
  return props.cars.map(car => {
    return `${car.make} ${car.model} (${car.year})`;
  });
});

const formattedCarDescription = computed(() => {
  return Object.entries(props.carDescription).map(([key, value]) => {
    return `${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
  });
});

</script>

<template>
	<div class="border">
		<h1>Complex props</h1>

		<h1>CARS!!! array</h1>
		<ul v-for="(car, index) in cars" :key="index">
			<li>{{ car }}</li>
			<li></li>
		</ul>
		<hr>

		<ul>
			<h1>formattedCars object</h1>
      <li v-for="(car, index) in formattedCars" :key="index">{{ car }}</li>
    </ul>
		<hr>

		<h1>DESCRIPTIONS!!! object</h1>
		<ul v-for="(value, key, index) in Object.entries(carDescription)" :key="index">
			<li>{{ key }}: {{ value }}</li>
			<li></li>
		</ul>


		<!-- <h1>{{ cars.make }}</h1> -->
		<!-- <h1>{{ carDescription }}</h1> -->



	</div>
</template>
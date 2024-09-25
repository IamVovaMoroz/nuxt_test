<template>
	<form @submit.prevent="handleSubmit">
	  <p>Create Product</p>
	  <div class="input-container">
		<div class="title-block">
		  <label for="title">Title:</label>
		  <input id="title" type="text" v-model="title">
		</div>
		<div class="price-block">
		  <label for="price">Price:</label>
		  <input id="price" type="number" v-model="price">
		</div>
	  </div>
	  <button type="submit">Add Product</button>
	</form>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
	emits: ['product-added'],
	setup(_, { emit }) {
	  const title = ref('');
	  const price = ref('');
  
	  const handleSubmit = () => {
		emit('product-added', { title: title.value, price: Number(price.value), id: '@' });
		title.value = '';
		price.value = '';
	  };
  
	  return {
		title,
		price,
		handleSubmit,
	  };
	},
  });
  </script>
  
  <style scoped>
  /* .input-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
  }
  
  .title-block, .price-block {
	display: flex;
	flex-direction: column;
  }
  
  label {
	font-weight: bold;
	margin-bottom: 8px;
  }
  
  input {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
  }
  
  button {
	margin-top: 20px;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  
  button:hover {
	background-color: #0056b3;
  } */
  </style>
  
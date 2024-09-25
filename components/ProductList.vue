<template>
	<div>
<div v-if="!loading" class="content">
	<div class="panel">
		<ProductForm @product-added="addProduct"/>
		<button @click="sortProduct">Sort by price</button>
	</div>

	<ul class="product-list">
		<li v-for="product in productsStore.products" :key="product.id">
			{{ product.title }} - {{ product.price }}
			<div class="number">{{ product.id }}</div>
			<button @click="removeProduct(product.id)">Remove</button>
		</li>
	</ul>

</div>
<Loader v-else/>
	</div>
</template>

<script setup>
import Loader from './Loader.vue';
import { useProductStore } from '~/store/productStore';
import { defineComponent, onMounted } from 'vue';

const productsStore = useProductStore()

onMounted(() => {
 fetchProducts()
})

const fetchProducts =()=> {
	productsStore.fetchProducts()
}

const addProduct =(product)=> {
	productsStore.addProduct(product)
}

const removeProduct =(productId)=> {
	productsStore.removeProduct(productId)
}

const sortProduct =()=> {
	productsStore.sortProducts()
}

// return {
// 	productsStore,
// 	fetchProducts,
// 	addProduct, 
// 	removeProduct,
// 	sortProduct 
// }

</script>

<style lang="scss" scoped>

</style>
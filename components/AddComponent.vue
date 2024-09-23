<script setup>
const myMessage = 'TEXT FROM SCRIPT {{ }} - this is JS area'

function add(x, y) {
	return x + y
}

const myChanel = 'https://www.youtube.com/watch?v=pgWZLS75Nmo&list=LL&index=39&t=17766s'
const imgAmazon = 'https://images.wallpaperscraft.ru/image/single/pejzazh_art_doroga_127350_3840x2400.jpg'
const altText = 'Just alt from JS script'
const sizesImg = 400


// dynamic binding!!!!!

const imageInfo = {
	src: 'https://images.wallpaperscraft.ru/image/single/devushka_siluet_planeta_1067694_3840x2400.jpg',
	alt: 'dynamic text from script JS',
	width: 400,
	height: 400,
}


</script>

<template>
	<div>
		<h1 class="border bg-slate-500">Add children component</h1>
		<h2>{{ myMessage }}</h2>
		<h2> 2 + 2 = {{ 2 + 2 }}</h2>
		<h2> Add two numbers from function = {{ add(2, 2) }}</h2>
		<div class="border pt-2">
			<h1 class="text-red-500">LINKS SECTION</h1>
			<a class="pr-10" v-bind:href="myChanel">1. Click here - (v-bind:) js</a>
			<a class="pr-10" :href="myChanel">2. Click here - (:) js</a>
			<a class="pr-10" href="https://www.youtube.com/watch?v=pgWZLS75Nmo&list=LL&index=39&t=17766s">3. Click here
				- (from href="")</a>
		</div>
		<div>
			<h1 class="text-red-500">IMAGES SECTION</h1>
			<!-- <img src="https://images.wallpaperscraft.ru/image/single/devushka_reka_zakat_1067581_3840x2400.jpg" :alt="altText" > -->
			<p>Below from script img JS - v-bind</p>
			<img :src="imgAmazon" :alt="altText" :width="sizesImg" :height="sizesImg" >
			<p>Below from script img dynamic JS - v-bind</p>
			<!-- <img :="imageInfo"> -->
		</div>
	</div>
</template>
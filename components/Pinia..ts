// <template>
// 	<div>

// 	</div>
// </template>

// <script>
// import { createApp } from 'vue';
// import app from '~/app.vue';
// import { createPinia } from 'pinia';

// const pinia = createPinia()

// createApp(App).use(pinia).mount('#app')

// 	// export default {
		
// 	// }
// </script>

// <style lang="scss" scoped>

// </style>

// plugins/pinia.ts
import { createPinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
});
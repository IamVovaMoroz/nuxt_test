
<template>
	<div class="border">
	<h1>Hello, {{name}}</h1>




</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: 'Vova here'
    };
  }
});
</script>

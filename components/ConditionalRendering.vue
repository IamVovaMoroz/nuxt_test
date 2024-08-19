<script setup>
import { ref, computed } from 'vue';

const isTrue = false;
const isFalse = false;

let isVisible = ref(true);

let isUserLoggedIn = ref(false);
let userName = ref("Volodymyr"); 


const showDetails = computed(() => isUserLoggedIn.value);
</script>

<template>
  <div class="border">
    <h1>Conditional Rendering</h1>

    <p v-if="isTrue">This will show if isTrue is TRUE</p>
    <p v-else-if="isFalse">This will show if isFalse is TRUE</p>
    <p v-else>This will show if neither isTrue nor isFalse is TRUE</p>

    <!-- we can still see it in our DOM v-show -->
    <p v-show="isVisible">This paragraph will be shown or hidden based on the value of isVisible</p>
    <button @click="isVisible = !isVisible" style="padding: 10px 20px; border: 1px solid #ccc; background-color: #f0f0f0; cursor: pointer;">
      Toggle Visibility
    </button>

    <!-- isUserLoggedIn -->
    <h1 v-if="isUserLoggedIn">Welcome {{ userName }}</h1>
    <p v-else>This content for LogIn user</p>

    <div v-show="showDetails">
      <p>You can't see this</p>
    </div>
  </div>
</template>
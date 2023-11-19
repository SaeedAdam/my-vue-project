// file: src/App.vue
<script setup lang="ts">
// import a reference to our ItemsView component
import ItemsView from './views/Items.view.vue'
</script>

<template>
  <div class="home">
    <ItemsView />
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  max-width: 50%;
  margin: 0 auto;
}
</style>

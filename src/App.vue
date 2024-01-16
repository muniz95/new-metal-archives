<script setup lang="ts">
import { RouterView } from 'vue-router'
import NMAHeader from '@/components/UserHeader.vue'
</script>

<template>
  <div class="container">
    <NMAHeader />

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
  }

  @media (max-width: 1023px) {
    .container {
      flex-flow: column;
    }
  }

  @media (min-width: 1024px) {
    .container {
      flex-flow: row;
    }
  }
</style>

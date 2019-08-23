<template>
  <div id="app">
    <NMAHeader />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NMAHeader from '@/components/Header'

export default {
  name: 'app',
  components: { NMAHeader }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  flex-flow: column;
}

main {
  height: 90%;
  padding: 10px;
}
</style>

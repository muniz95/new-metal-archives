<template>
  <div id="app">
    <NMAHeader v-if="!this.$store.state.authenticated" />
    <NMAAdminHeader v-if="this.$store.state.authenticated" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NMAHeader from '@/components/Header'
import NMAAdminHeader from '@/components/AdminHeader'

export default {
  name: 'app',
  components: { NMAHeader, NMAAdminHeader }
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

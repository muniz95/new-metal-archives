<template>
  <v-app>
    <NMAHeader v-if="!this.$store.state.authenticated" />
    <NMAAdminHeader v-if="this.$store.state.authenticated" />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
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

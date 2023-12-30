<template>
  <table>
    <tr v-for='link in links' v-bind:key="link.site">
      <td><a target="blank" :href="link.url">{{link.site}}</a></td>
    </tr>
  </table>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'RelatedLinks',
  props: ['bandId'],
  data () {
    return {
      links: []
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/bands/${this.bandId}/links`)
    this.links = response.data
  }
}
</script>

<style>

</style>

<template>
  <table>
    <tr v-for='link in links' v-bind:key="link.site">
      <td><a target="blank" :href="link.url">{{link.site}}</a></td>
    </tr>
  </table>
</template>

<script>
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
    const response = await axios.get(`http://localhost:8081/api/bands/${this.bandId}/links`)
    this.links = response.data
  }
}
</script>

<style>

</style>

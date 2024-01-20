<template>
  <table>
    <tr v-for='link in links' v-bind:key="link.site">
      <td><a target="blank" :href="link.url">{{link.site}}</a></td>
    </tr>
  </table>
</template>

<script lang="ts">
import type Link from '@/entities/link'
import axios from 'axios'
export default {
  name: 'RelatedLinks',
  props: ['bandId'],
  data () {
    return {
      links: new Array<Link>()
    }
  },
  async mounted () {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bands/${this.bandId}/links`)
    this.links = response.data
  }
}
</script>

<style>

</style>

<template>
  <table>
    <tr v-for='lineup in lineups' v-bind:key="lineup.id">
      <td>{{lineup.artist.name}}</td>
      <td>{{lineup.role}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandMembers',
  props: ['albumId'],
  data () {
    return {
      lineups: []
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/albums/${this.albumId}/lineup`)
    this.lineups = response.data
  }
}
</script>

<style>

</style>

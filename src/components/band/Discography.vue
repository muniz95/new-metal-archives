<template>
  <table>
    <tr>
      <th>Album name</th>
      <th>Type</th>
      <th>Year</th>
      <th>Reviews</th>
    </tr>
    <tr v-for='album in albums' v-bind:key="album.name">
      <td>{{album.name}}</td>
      <td>{{album.type}}</td>
      <td>{{album.year}}</td>
      <td>{{album.reviews}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandDiscography',
  props: ['bandId'],
  data () {
    return {
      albums: []
    }
  },
  async mounted () {
    const response = await axios.get(`http://localhost:8081/api/bands/${this.bandId}/discography`)
    this.albums = response.data
  }
}
</script>

<style>

</style>

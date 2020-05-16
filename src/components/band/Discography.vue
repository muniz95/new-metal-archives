<template>
  <table>
    <tr>
      <th>Album name</th>
      <th>Type</th>
      <th>Year</th>
      <th>Reviews</th>
    </tr>
    <tr v-for='album in albums' v-bind:key="album.name">
      <td>{{album.release.name}}</td>
      <td>{{album.release.release_type}}</td>
      <td>{{getYear(album.release.release_date)}}</td>
      <td></td>
    </tr>
  </table>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'BandDiscography',
  props: ['bandId', 'albums'],
  methods: {
    getYear (date) {
      return new Date(date).getFullYear()
    }
  }
  // data () {
  //   return {
  //     albums: []
  //   }
  // },
  // async mounted () {
  //   const response = await axios.get(`http://localhost:3000/api/v1/discography/${this.bandId}`)
  //   this.albums = response.data
  // }
}
</script>

<style>

</style>

<template>
  <table>
    <tr>
      <th>Band name</th>
      <th>Country</th>
      <th>Genre</th>
      <th>Score</th>
    </tr>
    <tr v-for='artist in similarArtists' v-bind:key="artist.name">
      <td>{{artist.name}}</td>
      <td>{{artist.country}}</td>
      <td>{{artist.genre}}</td>
      <td>{{artist.score}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SimilarArtists',
  props: ['bandId'],
  data () {
    return {
      similarArtists: []
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/bands/${this.bandId}/similar`)
    this.similarArtists = response.data
  }
}
</script>

<style>

</style>

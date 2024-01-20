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

<script lang="ts">
import type Band from '@/entities/band'
import axios from 'axios'
export default {
  name: 'SimilarArtists',
  props: ['bandId'],
  data () {
    return {
      similarArtists: new Array<Band>()
    }
  },
  async mounted () {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bands/${this.bandId}/similar`)
    this.similarArtists = response.data
  }
}
</script>

<style>

</style>

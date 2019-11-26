<template>
  <table>
    <tr v-for='artist in artists' v-bind:key="artist.name">
      <td>
        <h4>{{artist.name}}</h4> ({{artist.role}})
      </td>
      <td>{{artist.relatedProjects.join(', ')}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandMembers',
  props: ['bandId'],
  data () {
    return {
      artists: []
    }
  },
  async mounted () {
    const response = await axios.get(`http://localhost:8081/api/bands/${this.bandId}/members`)
    this.artists = response.data
  }
}
</script>

<style>

</style>

<template>
  <table>
    <tr>
      <th>Album date</th>
      <th>Label</th>
      <th>Catalog ID</th>
      <th>Format</th>
      <th>Description</th>
    </tr>
    <tr v-for='version in versions' v-bind:key="version.id">
      <td>
        <router-link :to="{name: 'AlbumDetails', params: {id: version.id}}">
          {{albumDate(version.album_date)}}
        </router-link>
      </td>
      <td>{{version.label.name}}</td>
      <td>{{version.catalog_id}}</td>
      <td>{{version.format}}</td>
      <td>{{version.description}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OtherVersions',
  props: ['albumId'],
  data () {
    return {
      versions: []
    }
  },
  methods: {
    albumDate: function (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/albums/${this.albumId}/versions`)
    this.versions = response.data
  }
}
</script>

<style>

</style>

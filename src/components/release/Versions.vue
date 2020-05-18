<template>
  <table>
    <tr>
      <th>Release date</th>
      <th>Label</th>
      <th>Catalog ID</th>
      <th>Format</th>
      <th>Description</th>
    </tr>
    <tr v-for='version in versions' v-bind:key="version.id">
      <td>
        <router-link :to="{name: 'ReleaseDetails', params: {id: version.id}}">
          {{releaseDate(version.release_date)}}
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
  props: ['releaseId'],
  data () {
    return {
      versions: []
    }
  },
  methods: {
    releaseDate: function (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/releases/${this.releaseId}/versions`)
    this.versions = response.data
  }
}
</script>

<style>

</style>

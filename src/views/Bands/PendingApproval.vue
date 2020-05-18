<template>
  <table>
    <tr>
      <th>Band</th>
      <th>Genre</th>
      <th>Country</th>
      <th>Submitted by</th>
      <th>Date</th>
    </tr>
    <tr v-for='band in bands' v-bind:key="band.id">
      <td>
        <router-link :to="{name: 'BandDetails', params: { id: band.id }}">
          {{band.name}}
        </router-link>
      </td>
      <td>{{band.genre}}</td>
      <td>{{band.country.name}}</td>
      <td>{{band.user.email}}</td>
      <td>{{parseDate(band.created_at)}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandsPendingApproval',
  data () {
    return {
      bands: []
    }
  },
  methods: {
    parseDate (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  async mounted () {
    const params = {
      params: {
        includes: 'country,user'
      }
    }
    console.log(process.env)
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/bands`, params)
    this.bands = response.data
  }
}
</script>

<style>

</style>

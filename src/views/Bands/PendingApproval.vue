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

<script lang="ts">
import axios from 'axios'
import Band from '@/entities/band';
export default {
  name: 'BandsPendingApproval',
  data () {
    return {
      bands: new Array<Band>()
    }
  },
  methods: {
    parseDate (date: string) {
      return new Date(date).toLocaleDateString()
    }
  },
  async mounted () {
    const params = {
      params: {
        includes: 'country,user'
      }
    }
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bands`, params)
    this.bands = response.data
  }
}
</script>

<style>

</style>

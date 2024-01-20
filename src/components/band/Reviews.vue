<template>
  <table>
    <tr>
      <th>Album</th>
      <th>Rating</th>
      <th>Author</th>
      <th>Date</th>
    </tr>
    <tr v-for='review in reviews' v-bind:key="review.id">
      <td>{{review.album.name}}</td>
      <td>{{review.rating}}%</td>
      <td>{{review.user.first_name}}</td>
      <td>{{review.created_at}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import type Review from '@/entities/review'
import axios from 'axios'
export default {
  name: 'BandReviews',
  props: ['bandId'],
  data () {
    return {
      reviews: new Array<Review>()
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/bands/${this.bandId}/reviews`)
    this.reviews = response.data
  }
}
</script>

<style>

</style>

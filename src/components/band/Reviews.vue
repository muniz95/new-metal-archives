<template>
  <table>
    <tr>
      <th>Album</th>
      <th>Rating</th>
      <th>Author</th>
      <th>Date</th>
    </tr>
    <tr v-for='review in reviews' v-bind:key="review.name">
      <td>{{review.album}}</td>
      <td>{{review.rating}}</td>
      <td>{{review.author}}</td>
      <td>{{review.date}}</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandReviews',
  props: ['bandId'],
  data () {
    return {
      reviews: []
    }
  },
  async mounted () {
    const response = await axios.get(`http://localhost:8081/api/bands/${this.bandId}/reviews`)
    this.reviews = response.data
  }
}
</script>

<style>

</style>

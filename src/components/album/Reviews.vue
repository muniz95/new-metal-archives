<template>
  <table>
    <tr v-for='review in reviews' v-bind:key="review.id">
      <td>{{review.title}}</td>
      <td>{{review.rating}}%</td>
      <td>{{review.user.first_name}}</td>
      <td>{{formatDate(review.created_at)}}</td>
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
      reviews: []
    }
  },
  methods: {
    formatDate: function (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/albums/${this.albumId}/reviews`)
    this.reviews = response.data
  }
}
</script>

<style>

</style>

<template>
  <table>
    <tr v-for='disc in discs' v-bind:key="disc.name">
      <td>
        {{disc.name}}
      </td>
      <td>
        <tr v-for='song in disc.songs' v-bind:key="song.id">
          <td>{{song.title}}</td>
          <td>{{song.length}}</td>
        </tr>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
// import axios from 'axios'
export default {
  name: 'SongList',
  props: ['discs'],
  methods: {
    getYear (date: string) {
      return new Date(date).getFullYear()
    }
  }
  // data () {
  //   return {
  //     discs: []
  //   }
  // },
  // async mounted () {
  //   const response = await axios.get(`${import.meta.env.VITE_API_URL}/discography/${this.bandId}`)
  //   this.discs = response.data
  // }
}
</script>

<style>

</style>

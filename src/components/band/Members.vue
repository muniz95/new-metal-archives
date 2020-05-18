<template>
  <table>
    <tr v-for='role in roles' v-bind:key="role.id">
      <td>
        <h4>{{role.artist.name}}</h4> {{role.title}}({{role.start}}-{{end(role.end)}})
      </td>
      <td>{{relatedProjects(role)}}</td>
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
      roles: []
    }
  },
  methods: {
    relatedProjects (role) {
      const projects = role.artist.roles.map(role => role.band.name).join(', ')
      return `See also: ${projects}`
    },
    end (date) {
      return date || 'present'
    }
  },
  async mounted () {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/bands/${this.bandId}/members`)
    this.roles = response.data
    console.log(response.data)
  }
}
</script>

<style>

</style>

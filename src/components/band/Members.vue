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

<script lang="ts">
import type Role from '@/entities/role'
import axios from 'axios'
export default {
  name: 'BandMembers',
  props: ['bandId'],
  data () {
    return {
      roles: new Array<Role>()
    }
  },
  methods: {
    relatedProjects (role: Role) {
      const projects = role.artist.roles.map(role => role.band.name).join(', ')
      return `See also: ${projects}`
    },
    end (date: number) {
      return date || 'present'
    }
  },
  async mounted () {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bands/${this.bandId}/members`)
    this.roles = response.data
  }
}
</script>

<style>

</style>

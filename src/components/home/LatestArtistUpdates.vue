<template>
  <div>
    <table>
      <tr v-for='artist in artists' v-bind:key='artist.id'>
        <td>
          {{artist.name}}
        </td>
        <td class="text-right">
          {{artist.date}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LatestArtistUpdates',
  data () {
    return {
      artists: [
        { id: 1, name: 'Andrea Espino', date: 'June 25, 23:04' },
        { id: 2, name: 'Harold Hoover', date: 'June 25, 22:49' },
        { id: 3, name: 'Cameron Shirey', date: 'June 25, 22:47' },
        { id: 4, name: 'Erebus', date: 'June 25, 17:17' },
        { id: 5, name: 'Josh Villa', date: 'June 25, 17:16' },
        { id: 6, name: 'T', date: 'June 25, 17:13' },
        { id: 7, name: 'Edson Ferreira', date: 'June 25, 16:54' },
        { id: 8, name: 'Monalisa Andrade', date: 'June 25, 16:49' },
        { id: 9, name: 'J. Medeiros', date: 'June 25, 16:30' },
        { id: 10, name: 'Rafael Simões', date: 'June 25, 13:38' }
      ]
    }
  }
}
</script>

<style>

</style>

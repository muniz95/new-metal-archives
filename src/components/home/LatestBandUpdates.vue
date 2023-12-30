<template>
  <div>
    <table>
      <tr v-for="band in bands" v-bind:key="band.id">
        <td>
          {{band.name}}
        </td>
        <td class="text-right">
          {{band.date}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LatestBandUpdates',
  data () {
    return {
      bands: [
        { id: 1, name: 'Cadaver Soiree', date: 'June 25, 10:43' },
        { id: 2, name: 'Panthematic', date: 'June 25, 10:21' },
        { id: 3, name: 'Qualen', date: 'June 25, 09:56' },
        { id: 4, name: 'Halcón', date: 'June 25, 07:44' },
        { id: 5, name: 'Infadus', date: 'June 25, 07:23' },
        { id: 6, name: 'Dispiteous', date: 'June 25, 06:39' },
        { id: 7, name: 'Mysterium Vacui', date: 'June 25, 05:35' },
        { id: 8, name: 'Veliki Odmor', date: 'June 25, 05:30' },
        { id: 9, name: 'Angústia', date: 'June 25, 05:05' },
        { id: 10, name: 'Tenebrius', date: 'June 25, 04:32' }
      ]
    }
  }
}
</script>

<style>
  table {
    width: 100%;
  }

  .text-right {
    text-align: right;
  }
</style>

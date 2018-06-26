<template>
  <div>
    <table>
      <tr v-for='label in labels' v-bind:key='label.id'>
        <td>
          {{label.name}}
        </td>
        <td class="text-right">
          {{label.date}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LatestLabelUpdates',
  data () {
    return {
      labels: [
        {id: 1, name: 'War Cry', date: 'June 25, 13:20'},
        {id: 2, name: 'Unholy Dungeon Records', date: 'June 25, 00:53'},
        {id: 3, name: 'Kaiwhakamate Records', date: 'June 24, 08:09'},
        {id: 4, name: 'SPB 282', date: 'June 24, 07:07'},
        {id: 5, name: 'Evil Attack Records', date: 'June 24, 04:03'},
        {id: 6, name: 'Interitvs Nvmen', date: 'June 22, 12:51'},
        {id: 7, name: 'Church Records', date: 'June 22, 05:53'},
        {id: 8, name: 'Sunshine Ward Recordings', date: 'June 22, 05:44'},
        {id: 9, name: 'DK Records', date: 'June 21, 03:40'},
        {id: 10, name: 'Hecate Productions', date: 'June 20, 17:16'}
      ]
    }
  }
}
</script>

<style>

</style>

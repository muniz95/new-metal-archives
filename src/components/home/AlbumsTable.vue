<template>
  <table>
    <tr v-for="album in albums" v-bind:key="album.id">
      <td>{{album.bandName}}</td>
      <td>{{album.name}}</td>
      <td class="right">{{album.date}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
export default {
  name: 'AlbumsTable',
  props: ['album'],
  created () {},
  data () {
    return {
      albums: [
        { id: 1, bandName: 'Nächtlich', name: 'The Third Coming', date: 'Jun 27th' },
        { id: 2, bandName: 'Dragon', name: 'Scream of Death', date: 'Jun 27th' },
        { id: 3, bandName: 'Trivium', name: 'Vengeance Falls', date: 'Jun 27th' },
        { id: 4, bandName: 'Defiatory', name: 'Hades Rising', date: 'Jun 27th' },
        { id: 5, bandName: 'Hoth', name: 'Astral Necromancy', date: 'Jun 27th' },
        { id: 6, bandName: 'Convocation', name: 'Scars Across', date: 'Jun 27th' },
        { id: 7, bandName: 'Hexx', name: 'No Escape', date: 'Jun 27th' },
        { id: 8, bandName: 'Subduer', name: 'Death Monolith', date: 'Jun 27th' },
        { id: 9, bandName: 'Stormwitch', name: 'Walpurgis Night', date: 'Jun 27th' },
        { id: 10, bandName: 'Sadist', name: 'Lego', date: 'Jun 27th' },
        { id: 11, bandName: 'Memory Garden', name: 'Carnage Carnival', date: 'Jun 27th' },
        { id: 12, bandName: 'Megadeth', name: 'Youthanasia', date: 'Jun 26th' },
        { id: 13, bandName: 'Blackslash', name: 'Lightning Strikes...', date: 'Jun 26th' },
        { id: 14, bandName: 'Hamferð', name: 'Támsins likam', date: 'Jun 26th' },
        { id: 15, bandName: 'Drudkh', name: 'Їм часто сниться...', date: 'Jun 26th' },
        { id: 16, bandName: 'Fister', name: 'No Spirit Within', date: 'Jun 26th' },
        { id: 17, bandName: 'Superstition', name: 'Surging Throng of...', date: 'Jun 26th' },
        { id: 18, bandName: 'Totalselfhatred', name: 'Solitude', date: 'Jun 26th' },
        { id: 19, bandName: 'Veld', name: 'S.I.N.', date: 'Jun 26th' },
        { id: 20, bandName: 'Embrace of Thorns', name: 'Scorn Aesthetics', date: 'Jun 26th' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .right {
    text-align: right;
  }
</style>

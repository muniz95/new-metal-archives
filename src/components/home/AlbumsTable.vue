<template>
  <table>
    <tr v-for="album in albums" v-bind:key="album.id">
      <td>{{album.bandName}}</td>
      <td>{{album.name}}</td>
      <td>{{album.date}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'AlbumsTable',
  props: ['album'],
  created () {
    console.log(this.album)
  },
  data () {
    return {
      albums: [
        {bandName: 'Nächtlich', name: 'The Third Coming', date: 'Jun 27th'},
        {bandName: 'Dragon', name: 'Scream of Death', date: 'Jun 27th'},
        {bandName: 'Trivium', name: 'Vengeance Falls', date: 'Jun 27th'},
        {bandName: 'Defiatory', name: 'Hades Rising', date: 'Jun 27th'},
        {bandName: 'Hoth', name: 'Astral Necromancy', date: 'Jun 27th'},
        {bandName: 'Convocation', name: 'Scars Across', date: 'Jun 27th'},
        {bandName: 'Hexx', name: 'No Escape', date: 'Jun 27th'},
        {bandName: 'Subduer', name: 'Death Monolith', date: 'Jun 27th'},
        {bandName: 'Stormwitch', name: 'Walpurgis Night', date: 'Jun 27th'},
        {bandName: 'Sadist', name: 'Lego', date: 'Jun 27th'},
        {bandName: 'Memory Garden', name: 'Carnage Carnival', date: 'Jun 27th'},
        {bandName: 'Megadeth', name: 'Youthanasia', date: 'Jun 26th'},
        {bandName: 'Blackslash', name: 'Lightning Strikes...', date: 'Jun 26th'},
        {bandName: 'Hamferð', name: 'Támsins likam', date: 'Jun 26th'},
        {bandName: 'Drudkh', name: 'Їм часто сниться...', date: 'Jun 26th'},
        {bandName: 'Fister', name: 'No Spirit Within', date: 'Jun 26th'},
        {bandName: 'Superstition', name: 'Surging Throng of...', date: 'Jun 26th'},
        {bandName: 'Totalselfhatred', name: 'Solitude', date: 'Jun 26th'},
        {bandName: 'Veld', name: 'S.I.N.', date: 'Jun 26th'},
        {bandName: 'Embrace of Thorns', name: 'Scorn Aesthetics', date: 'Jun 26th'}
      ]
    }
  }
}
</script>

<style>

</style>

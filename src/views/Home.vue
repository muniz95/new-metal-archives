<template>
  <div class="main">
    <div class="right-element">
      <a href="#">This is home</a>
      YES
    </div>
    <div class="left-element">

      <div class="w3-bar w3-black">
        <button v-on:click="openCity('Bands')">Bands</button>
        <button v-on:click="openCity('Labels')">Labels</button>
        <button v-on:click="openCity('Artists')">Artists</button>
      </div>

      <div id="Bands" class="w3-container city">
        <h2>Bands</h2>
        <latest-band-additions/>
      </div>

      <div id="Labels" class="w3-container city" style="display:none">
        <h2>Labels</h2>
        <latest-label-additions/>
      </div>

      <div id="Artists" class="w3-container city" style="display:none">
        <h2>Artists</h2>
        <latest-artist-additions/>
      </div>
    </div>
  </div>
</template>

<script>
import LatestBandAdditions from '@/components/LatestBandAdditions'
import LatestLabelAdditions from '@/components/LatestLabelAdditions'
import LatestArtistAdditions from '@/components/LatestArtistAdditions'
export default {
  name: 'home',
  created () {
    const res = Math.random()
    console.log(res)
  },
  components: {LatestBandAdditions, LatestLabelAdditions, LatestArtistAdditions},
  methods: {
    openCity (city) {
      [...document.getElementsByClassName('city')].forEach(el => { el.style.display = 'none' })
      document.getElementById(city).style.display = 'block'
    }
  }
}
</script>

<style>
  .main {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .left-element {
    width: 30%;
  }
</style>

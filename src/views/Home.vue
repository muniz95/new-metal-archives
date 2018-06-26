<template>
  <div class="main">
    <div class="right-element">
      <News v-for="news in newsList" v-bind:key='news.id' />
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
import HomeComponents from '@/components/home'
export default {
  name: 'home',
  created () {
    const res = Math.random()
    console.log(res)
  },
  components: HomeComponents,
  data () {
    return {
      newsList: [
        {id: 1, title: 'Teste 1', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 1'},
        {id: 2, title: 'Teste 2', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 2'},
        {id: 3, title: 'Teste 3', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 3'},
        {id: 4, title: 'Teste 4', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 4'},
        {id: 5, title: 'Teste 5', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 5'},
        {id: 6, title: 'Teste 6', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 6'},
        {id: 7, title: 'Teste 7', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 7'},
        {id: 8, title: 'Teste 8', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 8'},
        {id: 9, title: 'Teste 9', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 9'},
        {id: 10, title: 'Teste 10', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 10'}
      ]
    }
  },
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

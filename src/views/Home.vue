<template>
  <div class="main">
    <div class="right-element">
      <News v-for="news in newsList" v-bind:key='news.id' />
    </div>
    <div class="left-element">
      <div>
        <div>
          <button v-on:click="showTab('band-additions', 'addition')">Bands</button>
          <button v-on:click="showTab('label-additions', 'addition')">Labels</button>
          <button v-on:click="showTab('artist-additions', 'addition')">Artists</button>
        </div>

        <div id="band-additions" class="addition">
          <h2>Bands</h2>
          <latest-band-additions/>
        </div>

        <div id="label-additions" class="addition" style="display:none">
          <h2>Labels</h2>
          <latest-label-additions/>
        </div>

        <div id="artist-additions" class="addition" style="display:none">
          <h2>Artists</h2>
          <latest-artist-additions/>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>
        <div>
          <button v-on:click="showTab('band-updates', 'update')">Bands</button>
          <button v-on:click="showTab('label-updates', 'update')">Labels</button>
          <button v-on:click="showTab('artist-updates', 'update')">Artists</button>
        </div>

        <div id="band-updates" class="update">
          <h2>Bands</h2>
          <latest-band-updates/>
        </div>

        <div id="label-updates" class="update" style="display:none">
          <h2>Labels</h2>
          <latest-label-updates/>
        </div>

        <div id="artist-updates" class="update" style="display:none">
          <h2>Artists</h2>
          <latest-artist-updates/>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>
        <h2>Latest reviews</h2>
        <AlbumsTable category="reviews" />
      </div>
      <div>&nbsp;</div>
      <div>
        <h2>Upcoming albums</h2>
        <AlbumsTable category="upcoming" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeComponents from '@/components/home'
export default {
  name: 'home',
  components: HomeComponents,
  data () {
    return {
      newsList: [
        { id: 1, title: 'Teste 1', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 1' },
        { id: 2, title: 'Teste 2', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 2' },
        { id: 3, title: 'Teste 3', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 3' },
        { id: 4, title: 'Teste 4', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 4' },
        { id: 5, title: 'Teste 5', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 5' },
        { id: 6, title: 'Teste 6', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 6' },
        { id: 7, title: 'Teste 7', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 7' },
        { id: 8, title: 'Teste 8', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 8' },
        { id: 9, title: 'Teste 9', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 9' },
        { id: 10, title: 'Teste 10', content: 'uheuaheuhauehauheuaheuahe', author: 'Author 10' }
      ]
    }
  },
  methods: {
    showTab (city, type) {
      [...document.getElementsByClassName(type)].forEach(el => { el.style.display = 'none' })
      document.getElementById(city).style.display = 'block'
    }
  }
}
</script>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .right-element {
    @media (max-width: 765px) {
      width: 100%;
    }
    @media (min-width: 766px) {
      width: 70%;
    }
  }

  .left-element {
    @media (max-width: 765px) {
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
    @media (min-width: 766px) {
      width: 30%;
    }
  }
</style>

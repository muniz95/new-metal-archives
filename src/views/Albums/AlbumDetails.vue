<template>
  <div v-if="album != null">
    <h2>{{album.name}}</h2>
    <h4>{{bandsFeatured}}</h4>
    <div>
      <div class="left">
        <span>Type: {{album.album_type}}</span>
        <span>Album date: {{albumDate}}</span>
        <span>Catalog ID: {{album.catalog_id}}</span>
        <span>Genre: {{album.genre}}</span>
      </div>
      <div class="center">
        <span>Label: {{album.label.name}}</span>
        <span>Format: {{album.format}}</span>
        <span>Reviews: none yet</span>
      </div>
      <div class="right">
        <img :src="album.image" :alt="album.name">
      </div>
    </div>
    <p>
      {{album.info}}
    </p>
    <div>
      <div>
        <button v-on:click="showTab('songs', 'addition')">Songs</button>
        <button v-on:click="showTab('lineup', 'addition')">Lineup</button>
        <button v-on:click="showTab('versions', 'addition')">Other versions</button>
        <button v-on:click="showTab('reviews', 'addition')">Reviews</button>
        <button v-on:click="showTab('notes', 'addition')"
          v-if="album.additional_notes">Additional notes</button>
      </div>
      <div id="songs" class="addition">
        <SongList :discs="album.discs" />
      </div>

      <div id="lineup" class="addition" style="display:none">
        <Lineup :albumId="album.id" />
      </div>

      <div id="versions" class="addition" style="display:none">
        <OtherVersions :albumId="album.id" />
      </div>

      <div id="reviews" class="addition" style="display:none">
        <Reviews :albumId="album.id" />
      </div>

      <div v-if="album.additional_notes" id="notes"
        class="addition" style="display:none">
        <AdditionalNotes :notes="album.additional_notes" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type Album from '@/entities/album'
import axios from 'axios'
export default {
  data () {
    return {
      album: null as Album | null
    }
  },
  computed: {
    bandsFeatured: function () {
      return this.album!.participations.map(r => r.band.name).join('/')
    },
    albumDate: function () {
      return new Date(this.album!.album_date).toLocaleDateString()
    }
  },
  async mounted () {
    const { id } = this.$route.params
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/albums/${id}`)
    this.album = response.data
  },
  components: {
    SongList: () => import('@/components/album/SongList.vue'),
    Lineup: () => import('@/components/album/Lineup.vue'),
    OtherVersions: () => import('@/components/album/Versions.vue'),
    Reviews: () => import('@/components/album/Reviews.vue'),
    AdditionalNotes: () => import('@/components/album/AdditionalNotes.vue'),
  },
  methods: {
    // TODO: re-implement this logic without direct DOM manipulation
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showTab (city: string, type: string) {
      // [...document.getElementsByClassName(type)].forEach(el => {
      //   el.style.display = 'none'
      // })
      // document.getElementById(city).style.display = 'block'
    }
  }
}
</script>

<style>
</style>

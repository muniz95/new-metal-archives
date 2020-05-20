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
          v-if="this.album.additional_notes">Additional notes</button>
      </div>
      <div id="songs" class="addition">
        <SongList :discs="this.album.discs" />
      </div>

      <div id="lineup" class="addition" style="display:none">
        <Lineup :albumId="this.album.id" />
      </div>

      <div id="versions" class="addition" style="display:none">
        <OtherVersions :albumId="this.album.id" />
      </div>

      <div id="reviews" class="addition" style="display:none">
        <Reviews :albumId="this.album.id" />
      </div>

      <div v-if="this.album.additional_notes" id="notes"
        class="addition" style="display:none">
        <AdditionalNotes :notes="this.album.additional_notes" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import lazyLoadComponent from '@/utils/lazyLoader'
import SkeletonBox from '@/components/SkeletonBox.vue'
export default {
  data () {
    return {
      album: null
    }
  },
  computed: {
    bandsFeatured: function () {
      return this.album.participations.map(r => r.band.name).join('/')
    },
    albumDate: function () {
      return new Date(this.album.album_date).toLocaleDateString()
    }
  },
  async mounted () {
    const { id } = this.$route.params
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/albums/${id}`)
    this.album = response.data
  },
  components: {
    SongList: lazyLoadComponent({
      componentFactory: () => import('@/components/album/SongList.vue'),
      loading: SkeletonBox
    }),
    Lineup: lazyLoadComponent({
      componentFactory: () => import('@/components/album/Lineup.vue'),
      loading: SkeletonBox
    }),
    OtherVersions: lazyLoadComponent({
      componentFactory: () => import('@/components/album/Versions.vue'),
      loading: SkeletonBox
    }),
    Reviews: lazyLoadComponent({
      componentFactory: () => import('@/components/album/Reviews.vue'),
      loading: SkeletonBox
    }),
    AdditionalNotes: lazyLoadComponent({
      componentFactory: () => import('@/components/album/AdditionalNotes.vue'),
      loading: SkeletonBox
    })
  },
  methods: {
    showTab (city, type) {
      [...document.getElementsByClassName(type)].forEach(el => {
        el.style.display = 'none'
      })
      document.getElementById(city).style.display = 'block'
    }
  }
}
</script>

<style>
</style>

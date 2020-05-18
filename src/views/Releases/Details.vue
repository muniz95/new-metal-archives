<template>
  <div v-if="release != null">
    <h2>{{release.name}}</h2>
    <h4>{{bandsFeatured}}</h4>
    <div>
      <div class="left">
        <span>Type: {{release.release_type}}</span>
        <span>Release date: {{releaseDate}}</span>
        <span>Catalog ID: {{release.catalog_id}}</span>
        <span>Genre: {{release.genre}}</span>
      </div>
      <div class="center">
        <span>Label: {{release.label.name}}</span>
        <span>Format: {{release.format}}</span>
        <span>Reviews: none yet</span>
      </div>
      <div class="right">
        <img :src="release.image" :alt="release.name">
      </div>
    </div>
    <p>
      {{release.info}}
    </p>
    <div>
      <div>
        <button v-on:click="showTab('songs', 'addition')">Songs</button>
        <button v-on:click="showTab('lineup', 'addition')">Lineup</button>
        <button v-on:click="showTab('versions', 'addition')">Other versions</button>
        <button v-on:click="showTab('reviews', 'addition')">Reviews</button>
        <button v-on:click="showTab('notes', 'addition')"
          v-if="this.release.additional_notes">Additional notes</button>
      </div>
      <div id="songs" class="addition">
        <SongList :discs="this.release.discs" />
      </div>

      <div id="lineup" class="addition" style="display:none">
        <Lineup :releaseId="this.release.id" />
      </div>

      <div id="versions" class="addition" style="display:none">
        <OtherVersions :releaseId="this.release.id" />
      </div>

      <div id="reviews" class="addition" style="display:none">
        <Reviews :releaseId="this.release.id" />
      </div>

      <div v-if="this.release.additional_notes" id="notes"
        class="addition" style="display:none">
        <AdditionalNotes :notes="this.release.additional_notes" />
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
      release: null
    }
  },
  computed: {
    bandsFeatured: function () {
      return this.release.participations.map(r => r.band.name).join('/')
    },
    releaseDate: function () {
      return new Date(this.release.release_date).toLocaleDateString()
    }
  },
  async mounted () {
    const { id } = this.$route.params
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/releases/${id}`)
    this.release = response.data
  },
  components: {
    SongList: lazyLoadComponent({
      componentFactory: () => import('@/components/release/SongList.vue'),
      loading: SkeletonBox
    }),
    Lineup: lazyLoadComponent({
      componentFactory: () => import('@/components/release/Lineup.vue'),
      loading: SkeletonBox
    }),
    OtherVersions: lazyLoadComponent({
      componentFactory: () => import('@/components/release/Versions.vue'),
      loading: SkeletonBox
    }),
    Reviews: lazyLoadComponent({
      componentFactory: () => import('@/components/release/Reviews.vue'),
      loading: SkeletonBox
    }),
    AdditionalNotes: lazyLoadComponent({
      componentFactory: () => import('@/components/release/AdditionalNotes.vue'),
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

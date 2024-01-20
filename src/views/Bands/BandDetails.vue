<template>
  <div v-if="band != null">
    <h2>Title</h2>
    <div class="band-info">
      <div class="left">
        <span>Country of origin: {{band.country.name}}</span>
        <span>Location: {{band.location}}</span>
        <span>
          Status: <span :style="{color: `#${band.band_status.color}`}">
            {{band.band_status.title}}
          </span>
        </span>
        <span>Formed in: 2000</span>
        <span>Years active: 2000-present</span>
      </div>
      <div class="right">
        <span>Genre: {{band.genre}}</span>
        <span>Lyrical themes: {{band.themes}}</span>
        <span>Current label: {{band.label.name}}</span>
      </div>
    </div>
    <p>
      {{band.info}}
    </p>
    <div>
      <div>
        <button v-on:click="showTab('discography', 'addition')">Discography</button>
        <button v-on:click="showTab('members', 'addition')">Members</button>
        <button v-on:click="showTab('reviews', 'addition')">Reviews</button>
        <button v-on:click="showTab('similar-artists', 'addition')">Similar artists</button>
        <button v-on:click="showTab('related-links', 'addition')">Related links</button>
      </div>
      <div id="discography" class="addition">
        <BandDiscography :albums="band.participations" />
      </div>

      <div id="members" class="addition" style="display:none">
        <BandMembers :bandId="band.id" />
      </div>

      <div id="reviews" class="addition" style="display:none">
        <BandReviews :bandId="band.id" />
      </div>

      <div id="similar-artists" class="addition" style="display:none">
        <SimilarArtists :bandId="band.id" />
      </div>

      <div id="related-links" class="addition" style="display:none">
        <RelatedLinks :bandId="band.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import type Band from '@/entities/band'
import BandDiscography from '@/components/band/Discography.vue'
import BandMembers from '@/components/band/Members.vue'
import BandReviews from '@/components/band/Reviews.vue'
import SimilarArtists from '@/components/band/SimilarArtists.vue'
import RelatedLinks from '@/components/band/RelatedLinks.vue'
export default {
  data () {
    return {
      band: null as Band | null
    }
  },
  async mounted () {
    const { id } = this.$route.params
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/bands/${id}`)
    this.band = response.data
  },
  components: {
    BandDiscography,
    BandMembers,
    BandReviews,
    SimilarArtists,
    RelatedLinks,
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

<style lang="scss" scoped>
.band-info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.left,.right {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>

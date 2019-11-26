<template>
  <div>
    <h2>Title</h2>
    <div>
      <div class="left">
        <span>Country of origin: Brazil</span>
        <span>Location: Curitiba, Paraná</span>
        <span>Status: active</span>
        <span>Formed in: 2000</span>
        <span>Years active: 2000-present</span>
      </div>
      <div class="right">
        <span>Genre: Metalcore</span>
        <span>Lyrical themes: N/A</span>
        <span>Current label: Nuclear Blast</span>
      </div>
    </div>
    <p>
      The group formed as a trio in 2000 with vocalist Tim Lambesis,
      drummer Jordan Mancino, and guitarist Evan White, and shortly thereafter
      released Beneath the Encasing of Ashes. The band is named after the
      William Faulkner novel of the same name. A split CD with American Tragedy
      followed the next year. In 2003, the band signed with Metal Blade Records
      and released Frail Words Collapse.
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
        <BandDiscography bandId="1" />
      </div>

      <div id="members" class="addition" style="display:none">
        <BandMembers bandId="1" />
      </div>

      <div id="reviews" class="addition" style="display:none">
        reviews
      </div>

      <div id="similar-artists" class="addition" style="display:none">
        similar-artists
      </div>

      <div id="related-links" class="addition" style="display:none">
        related-links
      </div>
    </div>
  </div>
</template>

<script>
import lazyLoadComponent from '@/utils/lazyLoader'
import SkeletonBox from '@/components/SkeletonBox.vue'
export default {
  components: {
    BandDiscography: lazyLoadComponent({
      componentFactory: () => import('@/components/band/Discography.vue'),
      loading: SkeletonBox
    }),
    BandMembers: lazyLoadComponent({
      componentFactory: () => import('@/components/band/Members.vue'),
      loading: SkeletonBox
    })
    // BandDiscography: lazyLoadComponent({
    //   componentFactory: () => import('@/components/band/Discography.vue'),
    //   loading: SkeletonBox
    // }),
    // BandDiscography: lazyLoadComponent({
    //   componentFactory: () => import('@/components/band/Discography.vue'),
    //   loading: SkeletonBox
    // }),
    // BandDiscography: lazyLoadComponent({
    //   componentFactory: () => import('@/components/band/Discography.vue'),
    //   loading: SkeletonBox
    // }),
    // BandDiscography: lazyLoadComponent({
    //   componentFactory: () => import('@/components/band/Discography.vue'),
    //   loading: SkeletonBox
    // }),
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

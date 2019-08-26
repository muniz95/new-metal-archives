<template>
  <div>
    <h1>Rules & Guidelines</h1>
    <h6>Last modified on May 25th, 2019</h6>
    <p>
      Most of these rules are fairly obvious, but they are all very important.
      Not following the rules may result in a simple rejection of your submission.
      Please take the time to read them all at least once!
      It's not that long, and it will save you a lot of time than if you just ignore them
      and take the time to fill out a submission that will only get rejected!
    </p>
    <p>
      TROLLS BE WARNED: Depending on the gravity of your offense, repeating your infractions
      might go from making you lose all your points to get your account banned from the site!
      We have little tolerance for abuse and bullshit. Our system is not a kid's playground.
      Behave decently and intelligently or suffer the consequences.
      Constantly abuse our system and we might even report you to your ISP.
    </p>
    <p>
      That said, you will find that all of those rules are simply common sense,
      and most people have no trouble following them.
    </p>
    <div>
      <div>
        <button v-on:click="showTab('heavy-metal-only', 'update')">Heavy Metal Only</button>
        <button v-on:click="showTab('valid-albums-only', 'update')">Valid Albums Only</button>
        <button v-on:click="showTab('general', 'update')">General</button>
        <button v-on:click="showTab('reviews', 'update')">Reviews</button>
      </div>

      <div id="heavy-metal-only" class="update">
        <h2>Heavy Metal Only</h2>
        <HeavyMetalOnly />
      </div>

      <div id="valid-albums-only" class="update" style="display:none">
        <h2>Valid Albums Only</h2>
        <latest-label-updates />
      </div>

      <div id="general" class="update" style="display:none">
        <h2>General</h2>
        <latest-artist-updates />
      </div>

      <div id="reviews" class="update" style="display:none">
        <h2>Reviews</h2>
        <latest-artist-updates />
      </div>
    </div>
  </div>
</template>

<script>
import RulesComponents from '@/components/rules'
export default {
  components: RulesComponents,
  methods: {
    showTab (city, type) {
      [...document.getElementsByClassName(type)].forEach(el => { el.style.display = 'none' })
      document.getElementById(city).style.display = 'block'
    }
  }
}
</script>

<style>
</style>

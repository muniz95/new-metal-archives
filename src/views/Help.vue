<template>
  <div>
    <h1>Encyclopaedia Metallum HELP - How it works</h1>
    <h6>Last modified on May 24th, 2018</h6>
    <p>
      This page explains the purpose and function of the website.
      If, as a member, you are ever unsure about how to proceed, or if you have any question, please read this first.
      We also strongly suggest you browse the news archives in case the issue has already been addressed.
      If you have any further questions, then you can ask other users on the message board.
    </p>
    <div>
      <div>
        <button v-on:click="showTab('adding-new-data', 'update')">Adding new data</button>
        <button v-on:click="showTab('database', 'update')">Database</button>
        <button v-on:click="showTab('membership', 'update')">Membership</button>
        <button v-on:click="showTab('metal-collections', 'update')">Metal collections</button>
        <button v-on:click="showTab('ranks', 'update')">Ranks</button>
        <button v-on:click="showTab('similar-artists', 'update')">Similar artists</button>
        <button v-on:click="showTab('updating-existing-data', 'update')">Updating existing data</button>
      </div>

      <div id="adding-new-data" class="update">
        <h2>Adding new data</h2>
        <AddingNewData />
      </div>

      <div id="database" class="update" style="display:none">
        <h2>Database</h2>
        <Database />
      </div>

      <div id="membership" class="update" style="display:none">
        <h2>Membership</h2>
        <Membership />
      </div>

      <div id="metal-collections" class="update" style="display:none">
        <h2>Metal collections</h2>
        <MetalCollections />
      </div>

      <div id="ranks" class="update" style="display:none">
        <h2>Ranks</h2>
        <Ranks />
      </div>

      <div id="similar-artists" class="update" style="display:none">
        <h2>Similar artists</h2>
        <SimilarArtists />
      </div>

      <div id="updating-existing-data" class="update" style="display:none">
        <h2>Updating existing data</h2>
        <UpdatingExistingData />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HelpComponents from '@/components/help'
export default {
  components: HelpComponents,
  methods: {
    showTab (city: string, type: string) {
      [...document.getElementsByClassName(type)].forEach(
        (el: any) => { el.style.display = 'none' }
      )
      document.getElementById(city)!.style.display = 'block'
    }
  }
}
</script>

<style>

</style>

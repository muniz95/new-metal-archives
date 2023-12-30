<template>
  <div>
    <h1>Rules & Guidelines</h1>
    <p>
      Want to help? Below is a list of all the outstanding reports.
      If you have the access, go ahead and fix them.
      Check out these tips and guidelines. And thanks!
    </p>
    <p>
      You can also help by looking at all this other stuff to work on.
    </p>
    <div>
      <div>
        <button v-on:click="showTab('unassigned', 'update')">Unassigned</button>
        <button v-on:click="showTab('assigned', 'update')">Assigned</button>
        <button v-on:click="showTab('resolved', 'update')">Resolved</button>
      </div>

      <div id="unassigned" class="update">
        <h2>Unassigned</h2>
        <Unassigned />
      </div>

      <div id="assigned" class="update" style="display:none">
        <h2>Assigned</h2>
        <Assigned />
      </div>

      <div id="resolved" class="update" style="display:none">
        <h2>Resolved</h2>
        <Resolved />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ReportsComponents from '@/components/reports'
export default {
  name: 'NMAReports',
  components: ReportsComponents,
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

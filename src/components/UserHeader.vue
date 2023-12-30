<template>
  <div class="closebtn" @click="switchDrawer">&times;</div>
  <nav data-drawer-prevent-scroll="body" :class="{ 'is-visible': isVisible }">
    <ul>
      <div class="closebtn" @click="switchDrawer">X</div>
    </ul>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        Bands
        <ul>
          <li><RouterLink to="/bands/alphabetical">Alphabetical</RouterLink></li>
          <li><RouterLink to="/bands/country">Country</RouterLink></li>
          <li><RouterLink to="/bands/genre">Genre</RouterLink></li>
          <li><RouterLink to="/">Random Band</RouterLink></li>
          <li><RouterLink to="/bands/new">Add band</RouterLink></li>
          <li><RouterLink to="/bands/queue">Queue</RouterLink></li>
        </ul>
      </li>
      <li>
        Labels
        <ul>
          <li><RouterLink to="/labels/alphabetical">Alphabetical</RouterLink></li>
          <li><RouterLink to="/labels/country">Country</RouterLink></li>
        </ul>
      </li>
      <li>
        Others
        <ul>
          <li><RouterLink to="/user/rankings">User Rankings</RouterLink></li>
          <li><RouterLink to="/news/archive">News Archive</RouterLink></li>
          <li><RouterLink to="/reviews">Reviews</RouterLink></li>
          <li><RouterLink to="/rip">R.I.P.</RouterLink></li>
          <li><RouterLink to="/reports">Reports</RouterLink></li>
          <li><RouterLink to="/help">Help</RouterLink></li>
          <li><RouterLink to="/rules">Rules</RouterLink></li>
          <li><RouterLink to="/faq">FAQ</RouterLink></li>
        </ul>
      </li>
      <li>
        <RouterLink to="/Login">Login</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    closeDrawer() {
      console.log("closeDrawer");
      this.$emit("close");
    },
    switchDrawer() {
      this.isVisible = !this.isVisible;
    }
  },
  mounted() {
    this.isVisible = false;
  },
}
</script>

<style scoped lang="scss">
  nav {
    height: 100%; /* 100% Full-height */
    width: 300px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    visibility: hidden;

    &.is-visible {
      visibility: visible;
    }

    & > a:hover {
      color: #f1f1f1;
    }

    &.closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
  }
</style>

<template>
  <div id="openModal" class="closebtn" @click="switchDrawer">&times;</div>
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
  <div id="placeholder">&nbsp;</div>
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

<style lang="scss">
  @media (max-width: 1023px) {
    nav {
      height: 100%;
      width: 300px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      padding-top: 60px;
      transition: 0.5s;
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

    #placeholder {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    nav {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      left: 0;
      position: fixed;
      overflow-x: hidden;
      padding-top: 60px;
      transition: 0.5s;

      &.is-visible {
        visibility: visible;
      }

      & > a:hover {
        color: #f1f1f1;
      }

    }

    #openModal {
      display: none;
    }

    #placeholder {
      width: 300px;
    }
  }
</style>

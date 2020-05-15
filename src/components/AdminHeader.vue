<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </li>
      <li><router-link :to="{name: ''}">Bands</router-link>
        <ul>
          <li><router-link :to="{name: 'BandsByAlphabetical'}">Alphabetical</router-link></li>
          <li><router-link :to="{name: 'BandsByCountry'}">Country</router-link></li>
          <li><router-link :to="{name: 'BandsByGenre'}">Genre</router-link></li>
          <li><router-link :to="{name: 'Home'}">Random Band</router-link></li>
          <li><router-link :to="{name: 'NewBand'}">Add band</router-link></li>
        </ul>
      </li>
      <li>
        <router-link :to="{name: ''}">Labels</router-link>
        <ul>
          <li><router-link :to="{name: 'LabelsByAlphabetical'}">Alphabetical</router-link></li>
          <li><router-link :to="{name: 'LabelsByCountry'}">Country</router-link></li>
        </ul>
      </li>
      <li>
        <router-link :to="{name: ''}">Others</router-link>
        <ul>
          <li><router-link :to="{name: 'UserRankings'}">User Rankings</router-link></li>
          <li><router-link :to="{name: 'NewsArchive'}">News Archive</router-link></li>
          <li><router-link :to="{name: 'Reviews'}">Reviews</router-link></li>
          <li><router-link :to="{name: 'RIP'}">R.I.P.</router-link></li>
          <li><router-link :to="{name: 'Reports'}">Reports</router-link></li>
          <li><router-link :to="{name: 'Help'}">Help</router-link></li>
          <li><router-link :to="{name: 'Rules'}">Rules</router-link></li>
          <li><router-link :to="{name: 'FAQ'}">FAQ</router-link></li>
        </ul>
      </li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: 'NMAAdminHeader'
}
</script>

<style lang="scss">
  header {
    margin: 0;
    height: 10%;
    padding: 0 16px 0 24px;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    // font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    // font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
    color: #6D3F40;
  }

  h1 {
    font-size: 45px;
    text-align: center;
    color: #FFF;
  }

  h3 {
    font-size: 30px;
    text-align: center;
    color: #FFF;
  }

  h3 a {
    color: #FFF;
  }

  a {
    color: #FFF;
  }

  h1 {
    margin-top: 100px;
    text-align: center;
    font-size: 45px;
    font-family: 'Bree Serif', 'serif';
  }

  p {
    text-align: center;
  }

  nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }

  nav ul li {
    display: inline-block;
    background-color: #000000;
  }

  nav a {
    display: block;
    padding: 0 10px;
    color: #FFF;
    font-size: 15px;
    line-height: 45px;
    text-decoration: none;
  }

  nav a:hover {
    background-color: #6D3F40;
  }

  /* Hide Dropdowns by Default */

  nav ul ul {
    display: none;
    position: absolute;
    top: 45px;
    /* the height of the main nav */
  }

  /* Display Dropdowns on Hover */

  nav ul li:hover>ul {
    display: inherit;
  }

  nav ul ul li {
    width: 170px;
    float: none;
    display: list-item;
    position: relative;
  }

  nav ul ul ul li {
    position: relative;
    top: -45px;
    left: 170px;
  }

  /* Change this in order to change the Dropdown symbol */

  li>a:after {
    content: ' +';
  }

  li>a:only-child:after {
    content: '';
  }
</style>

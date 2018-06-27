<template>
  <nav>
    <ul>
      <router-link tag="li" :to="{name: 'Home'}">
        <a>Home</a>
      </router-link>
      <li><a href="#">WordPress</a>
        <ul>
          <li><a href="#">Themes</a></li>
          <li><a href="#">Plugins</a></li>
          <li><a href="#">Tutorials</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Web Design</a>
        <ul>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Links</a></li>
          <li><a href="#">Tutorials</a>
            <ul>
              <li><a href="#">HTML/CSS</a></li>
              <li><a href="#">jQuery</a></li>
              <li><a href="#">Other</a>
                <ul>
                  <li><a href="#">Stuff</a></li>
                  <li><a href="#">Things</a></li>
                  <li><a href="#">Other Stuff</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#">Graphic Design</a></li>
      <li><a href="#">Inspiration</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NMAHeader'
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
    font-size: 60px;
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
    font-size: 60px;
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
    top: 60px;
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
    top: -60px;
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

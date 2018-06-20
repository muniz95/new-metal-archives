<template>
  <div>
    This is home
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    const res = Math.random()
    console.log(res)
  }
}
</script>

<style>
  div {
    background-color: black;
  }
</style>

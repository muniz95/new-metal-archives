<template>
  <div class="news-box">
    <div class="title">Title</div>
    <div class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ex necessitatibus distinctio veritatis nulla quibusdam recusandae
      laudantium saepe unde aut deserunt, odit aperiam corporis blanditiis tempore omnis,
      nobis molestiae illo soluta?
    </div>
    <div class="author">Author</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NMANews'
}
</script>

<style lang="scss">
  .news-box {
    margin: 10px;
    border-bottom-color: #6D3F40;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: 90%;

    .title {
      font-size: 1.5em;
      padding-bottom: 5px;
    }
  }
</style>

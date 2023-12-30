<template>
  <div>
    <span>&rarr; {{question.text}}</span>
    <p>{{question.answer}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NMAQuestion',
  props: ['question']
}
</script>

<style lang="scss" scoped>
  p {
    text-align: left;
    transition: color 300ms;
    color: black;

    &:hover {
      color: white;
    }
  }
</style>

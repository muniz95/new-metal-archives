<template>
  <div>
    <Question
      v-for="question in questions"
      :key="question.id"
      :question="question" />
  </div>
</template>

<script lang="ts">
import Question from '@/components/faq/Question.vue'
export default {
  components: {
    Question
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'General', answer: 'No' },
        { id: 2, text: 'Adding albums', answer: 'No' },
        { id: 3, text: 'Editing your collection', answer: 'No' },
        { id: 4, text: 'Trading & Searching', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

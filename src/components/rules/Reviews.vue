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
  name: 'NMARulesReviews',
  components: {
    Question
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'Tell us about the *music*', answer: 'No' },
        { id: 2, text: 'Tell us about the *music*', answer: 'No' },
        { id: 3, text: 'Intelligence and decency', answer: 'No' },
        { id: 4, text: 'Correct spelling, grammar and formatting', answer: 'No' },
        { id: 5, text: 'English please', answer: 'No' },
        { id: 6, text: 'Avoid track-by-track', answer: 'No' },
        { id: 7, text: 'Only official, final albums', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

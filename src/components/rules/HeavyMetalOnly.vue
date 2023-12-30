<template>
  <div>
    <h4>Is your submitted band really metal?</h4>
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
        { id: 1, text: 'Short Version', answer: 'No' },
        { id: 2, text: 'Detailed Version', answer: 'No' },
        { id: 3, text: 'Long-ass, rambling, read-before-complaining-only version', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

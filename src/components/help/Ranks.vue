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
  name: 'NMARanks',
  components: {
    Question
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'Ranks', answer: 'No' },
        { id: 2, text: 'Points', answer: 'No' },
        { id: 3, text: 'Rank list', answer: 'No' },
        { id: 4, text: 'Access', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

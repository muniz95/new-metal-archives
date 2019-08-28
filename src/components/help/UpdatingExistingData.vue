<template>
  <div>
    <Question
      v-for="question in questions"
      :key="question.id"
      :question="question" />
  </div>
</template>

<script>
import Question from '@/components/faq/Question'
export default {
  components: {
    Question
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'Updating an existing band', answer: 'No' },
        { id: 2, text: 'Updating existing releases for a band', answer: 'No' },
        { id: 3, text: 'Updating links for a band', answer: 'No' },
        { id: 4, text: 'Updating existing artists and band/release line-ups', answer: 'No' },
        { id: 5, text: 'Updating existing labels', answer: 'No' },
        { id: 6, text: 'Updating your review', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

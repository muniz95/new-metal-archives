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
        { id: 2, text: 'Band moderation status', answer: 'No' },
        { id: 3, text: 'Band entry form', answer: 'No' },
        { id: 4, text: 'Adding a band\'s album', answer: 'No' },
        { id: 5, text: 'Split albums', answer: 'No' },
        { id: 6, text: 'Adding reissues and other versions', answer: 'No' },
        { id: 7, text: 'Adding an external link (for a band/artist/label)', answer: 'No' },
        { id: 8, text: 'Internal links', answer: 'No' },
        { id: 9, text: 'Line-up/artists', answer: 'No' },
        { id: 10, text: 'Label', answer: 'No' },
        { id: 11, text: 'Writing a review', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

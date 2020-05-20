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
        { id: 1, text: 'Summary', answer: 'No' },
        { id: 2, text: 'Complete albums only', answer: 'No' },
        { id: 3, text: 'Official albums only', answer: 'No' },
        { id: 4, text: 'Albumd and distributed albums only', answer: 'No' },
        { id: 5, text: 'Other versions of valid albums', answer: 'No' },
        { id: 6, text: 'Acceptable vs. unacceptable albums', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

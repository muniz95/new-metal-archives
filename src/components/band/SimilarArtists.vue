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
        { id: 1, text: 'Recommending a similar band', answer: 'No' },
        { id: 2, text: 'Voting on recommended bands', answer: 'No' },
        { id: 3, text: 'How votes are counted', answer: 'No' },
        { id: 4, text: 'Vote rigging: don\'t', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

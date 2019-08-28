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
        { id: 1, text: 'About Encyclopaedia Metallum', answer: 'No' },
        { id: 2, text: 'Visitors', answer: 'No' },
        { id: 3, text: 'Browsing', answer: 'No' },
        { id: 4, text: 'Searching', answer: 'No' },
        { id: 5, text: 'Reporting pages', answer: 'No' },
        { id: 6, text: 'Reporting bugs', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

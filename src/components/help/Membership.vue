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
        { id: 1, text: 'Membership', answer: 'No' },
        { id: 2, text: 'Registering', answer: 'No' },
        { id: 3, text: 'Security & privacy', answer: 'No' },
        { id: 4, text: 'Member privileges', answer: 'No' },
        { id: 5, text: 'Forgot your password? / Didn\'t receive activation email?', answer: 'No' },
        { id: 6, text: 'Account termination', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

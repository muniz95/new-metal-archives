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
  name: 'NMARulesGeneral',
  components: {
    Question
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'No bullshit/abuse/sabotage', answer: 'No' },
        { id: 2, text: 'No point-whoring abuse', answer: 'No' },
        { id: 3, text: 'Spelling, grammar and capitalisation', answer: 'No' },
        { id: 4, text: 'No Sock Puppets! (Reviews and Voting)', answer: 'No' },
        { id: 5, text: 'Guidelines for entering data', answer: 'No' },
        { id: 6, text: 'Guidelines for External Links', answer: 'No' },
        { id: 7, text: 'Guidelines for Unlisted Bands', answer: 'No' },
        { id: 8, text: 'Truthful information', answer: 'No' },
        { id: 9, text: 'Primacy of evidence', answer: 'No' },
        { id: 10, text: 'Once is enough...', answer: 'No' },
        { id: 11, text: 'Bands that change name', answer: 'No' },
        { id: 12, text: 'No plagiarism!', answer: 'No' }
      ]
    }
  }
}
</script>

<style>

</style>

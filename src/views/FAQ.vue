<template>
  <div class="faq">
    <h1>Frequently Asked Questions</h1>
    <h6>Last modified on August 20th, 2015</h6>
    <p>
      The frequently asked questions... we nicely ask that you read all of this before emailing us or asking on the forums!
      Otherwise, should you ask us something that is answered here, we will either send you the link to that page, or ignore you.
      Not because we're rude, but we just don't have the time to always answer the same questions over and over again to individuals.
      There is no specific order of questions for now, sorry about that.
      And we apologize in advance if some answers seem rude, but even our patience has limits. ;) Thank you.
    </p>
    <FAQQuestion
      v-for="question in questions"
      :key="question.id"
      :question="question">
    </FAQQuestion>
  </div>
</template>

<script lang="ts">
import FAQQuestion from '../components/faq/Question.vue'
export default {
  components: {
    FAQQuestion
  },
  data () {
    return {
      questions: [
        { id: 1, text: 'Why was band X rejected or deleted?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 2, text: 'I found a band that does not follow the rules of the site and should be deleted. What should I do?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 3, text: 'Can you make the following changes to X\'s page?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 4, text: 'Can you please delete my account?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 5, text: 'I found a mistake/some false info on a band/album/label/artist page. What should I do?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 6, text: 'But I submitted the report a long time ago and nothing has been done!', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 7, text: 'I want to change a picture/logo/covert art for a better one, but I don\'t have the veteran status yet. What should I do?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 8, text: 'I signed up but didn\'t receive my activation email / I forgot my password. What should I do?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 9, text: 'Please delete my band(s) from your site. I don\'t want this information to appear on your website.', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 10, text: 'Please delete my artist page. I do not want my real name/photo/etc. to appear on your site.', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 11, text: 'Where can I see the submission queue? I want to add a band but I don\'t know if it\'s already being submitted...', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 12, text: 'Can you give me your address so that I can send you my band\'s demo/album?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 13, text: 'Can you tell me why I suddenly lost X points? I didn\'t even submit any band/review recently!', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 14, text: 'How come I just lost all/X number of my points?! My submission wasn\'t that bad!', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 15, text: 'Do you have plans for adding tour dates, interviews, mp3s, sampler/various artist CDs, etc?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 16, text: 'My rank recently changed to that of Veteran, but I don\'t have more access than before, how come?', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 17, text: 'Why am I still shown as a "metal newbie" on the forums, I have over 1000 points!', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 18, text: 'I\'m older than you and I\'m a "metal newbie", and you\'re a "Metal God/Goddess"? What\'s up with that? I\'ve been listening to metal since when you were in diapers! Etc.', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 19, text: 'I submitted a band/bands X days ago, and still nothing. What\'s going on? Did you reject it? I didn\'t get the email!', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 20, text: 'I can\'t add bands/albums/info! Everytime I try, I get an error message.', answer: 'uheuaheuhauehauheuaheuahe' },
        { id: 21, text: 'I can\'t login to the board, it says my password is wrong.', answer: 'uheuaheuhauehauheuaheuahe' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .faq {
    h1, h6, p {
      text-align: left
    }
  }
</style>

<template>
  <form name='form' @submit.prevent='handleLogin'>
    <label for='email'>E-mail</label>
    <input
      v-model='email'
      type='text'
      class='form-control'
      name='email'
    />
    <label for='password'>Password</label>
    <input
      v-model='password'
      type='password'
      class='form-control'
      name='password'
    />
    <input type='submit' value='Login' />
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin () {
      const formData = {
        user: {
          email: this.email,
          password: this.password
        }
      }
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_API_URL}/login`,
          formData
        )
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('jwt', response.headers['authorization'])
          this.$router.push('/')
          this.$store.commit('authenticate')
        }
      } catch (error) {
        if (error.response.status === 401) {
          alert('Not authorized')
        }
      }
    }
  }
}
</script>

<style>
</style>

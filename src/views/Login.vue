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

<script lang="ts">
import axios from 'axios'
export default {
  name: 'NMALogin',
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
          localStorage.setItem('jwt', response.headers.authorization)
          this.$router.push('/')
          // FIXME: re-implement store state using Pinia
          // this.$store.commit('authenticate')
        }
      } catch (error) {
        console.error(error);
        // TODO: implement a better error handling
        // if (error.response.status === 401) {
        //   alert('Not authorized')
        // }
      }
    }
  }
}
</script>

<style>
</style>

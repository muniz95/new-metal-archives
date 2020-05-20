<template>
  <main>
    <h2>New band</h2>
    <form name='bandForm' @submit.prevent='handleSubmit'>
      <div class="form-area">
        <label for='name'>Band name</label>
        <input v-model='band.name' type='text' class='form-control' name='name' />
      </div>
      <div class="form-area">
        <label for='location'>Location</label>
        <input v-model='band.location' type='text' class='form-control' name='location' />
      </div>
      <div class="form-area">
        <label for='country'>Country</label>
        <select v-model='band.country_id'>
          <option v-for="country in countries" v-bind:value="country.id"
            v-bind:key="country.id">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='bandStatus'>Status</label>
        <select v-model='band.band_status_id'>
          <option v-for="bandStatus in bandStatuses" v-bind:value="bandStatus.id"
            v-bind:key="bandStatus.id">
            {{ bandStatus.title }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='formedIn'>Formed in</label>
        <select v-model='band.formed_in'>
          <option v-for="year in years" v-bind:value="year"
            v-bind:key="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='genre'>Genre</label>
        <input v-model='band.genre' type='text' class='form-control' name='genre' />
      </div>
      <div class="form-area">
        <label for='themes'>Lyrical themes</label>
        <input v-model='band.themes' type='text' class='form-control' name='themes' />
      </div>
      <div class="form-area">
        <label for='labelId'>Current label</label>
        <select v-model='band.label_id'>
          <option v-for="label in labels" v-bind:value="label.id"
            v-bind:key="label.id">
            {{ label.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='info'>Info</label>
        <textarea v-model="band.info" name="info" id="info" ></textarea>
      </div>
      <input type='submit' value='Login' />
    </form>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BandForm',
  props: ['bandId'],
  data () {
    return {
      band: {
        name: '',
        location: '',
        genre: '',
        themes: '',
        info: '',
        country_id: '',
        band_status_id: '',
        label_id: '',
        formed_in: new Date(Date.now()).getFullYear(),
        user_id: this.$store.state.user.id
      },
      countries: [],
      bandStatuses: [],
      labels: [],
      years: []
    }
  },
  methods: {
    async handleSubmit () {
      const headers = {
        headers: {
          Authorization: this.$store.state.jwt
        }
      }
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/bands`,
          this.band, headers)

        if (response.status === 201) {
          alert('Done!')
        }
      } catch (error) {

      }
    }
  },
  async mounted () {
    for (let i = 1900; i <= new Date(Date.now()).getFullYear(); i++) {
      this.years.push(i)
    }
    try {
      const responses = await Promise.all([
        axios.get(`${process.env.VUE_APP_API_URL}/countries`),
        axios.get(`${process.env.VUE_APP_API_URL}/band_statuses`),
        axios.get(`${process.env.VUE_APP_API_URL}/labels`)
      ])
      this.countries = responses[0].data
      this.bandStatuses = responses[1].data
      this.labels = responses[2].data
      if (this.bandId) {
        const band = await axios.get(
          `${process.env.VUE_APP_API_URL}/bands/${this.bandId}`
        ).data
        this.band = band
      }
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
.form-area {
  display: inherit;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <main>
    <h2>New release</h2>
    <form name='releaseForm' @submit.prevent='handleSubmit'>
      <div class="form-area">
        <label for='name'>Album name</label>
        <input v-model='release.name' type='text' class='form-control' name='name' />
      </div>
      <div class="form-area">
        <label for='location'>Band</label>
        <span>{{bandsFeatured(release)}}</span>
        <!-- <input v-model='release.band.name' type='text' class='form-control' name='location' /> -->
      </div>
      <div class="form-area">
        <label for='country'>Country</label>
        <select v-model='release.country_id'>
          <option v-for="country in countries" v-bind:value="country.id"
            v-bind:key="country.id">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='releaseStatus'>Status</label>
        <select v-model='release.release_status_id'>
          <option v-for="releaseStatus in releaseStatuses" v-bind:value="releaseStatus.id"
            v-bind:key="releaseStatus.id">
            {{ releaseStatus.title }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='formedIn'>Formed in</label>
        <select v-model='release.formed_in'>
          <option v-for="year in years" v-bind:value="year"
            v-bind:key="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='genre'>Genre</label>
        <input v-model='release.genre' type='text' class='form-control' name='genre' />
      </div>
      <div class="form-area">
        <label for='themes'>Lyrical themes</label>
        <input v-model='release.themes' type='text' class='form-control' name='themes' />
      </div>
      <div class="form-area">
        <label for='labelId'>Current label</label>
        <select v-model='release.label_id'>
          <option v-for="label in labels" v-bind:value="label.id"
            v-bind:key="label.id">
            {{ label.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='info'>Info</label>
        <textarea v-model="release.info" name="info" id="info" ></textarea>
      </div>
      <input type='submit' value='Login' />
    </form>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReleaseForm',
  props: ['albumId'],
  data () {
    return {
      release: {
        name: '',
        location: '',
        genre: '',
        themes: '',
        info: '',
        country_id: '',
        release_status_id: '',
        label_id: '',
        formed_in: new Date(Date.now()).getFullYear(),
        user_id: this.$store.state.user.id
      },
      countries: [],
      releaseStatuses: [],
      labels: [],
      years: []
    }
  },
  methods: {
    bandsFeatured (album) {
      return album.participations.map(x => x.band.name).join(', ')
    },
    async handleSubmit () {
      const headers = {
        headers: {
          Authorization: this.$store.state.jwt
        }
      }
      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/releases`,
          this.release, headers)

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
      // const responses = await Promise.all([
      //   axios.get(`${process.env.VUE_APP_API_URL}/api/v1/countries`),
      //   axios.get(`${process.env.VUE_APP_API_URL}/api/v1/release_statuses`),
      //   axios.get(`${process.env.VUE_APP_API_URL}/api/v1/labels`)
      // ])
      // this.countries = responses[0].data
      // this.releaseStatuses = responses[1].data
      // this.labels = responses[2].data
      const albumId = this.$route.params.id
      if (albumId) {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/api/v1/releases/${albumId}`
        )
        this.release = response.data
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

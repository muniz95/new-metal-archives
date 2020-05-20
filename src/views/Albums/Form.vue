<template>
  <main>
    <h2>New album</h2>
    <form name='albumForm' @submit.prevent='handleSubmit'>
      <div class="form-area">
        <label for='name'>Album name</label>
        <input v-model='album.name' type='text' class='form-control' name='name' />
      </div>
      <div class="form-area">
        <label for='location'>Band</label>
        <span>{{bandsFeatured(album)}}</span>
        <!-- <input v-model='album.band.name' type='text' class='form-control' name='location' /> -->
      </div>
      <div class="form-area">
        <label for='country'>Country</label>
        <select v-model='album.country_id'>
          <option v-for="country in countries" v-bind:value="country.id"
            v-bind:key="country.id">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='albumStatus'>Status</label>
        <select v-model='album.album_status_id'>
          <option v-for="albumStatus in albumStatuses" v-bind:value="albumStatus.id"
            v-bind:key="albumStatus.id">
            {{ albumStatus.title }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='formedIn'>Formed in</label>
        <select v-model='album.formed_in'>
          <option v-for="year in years" v-bind:value="year"
            v-bind:key="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='genre'>Genre</label>
        <input v-model='album.genre' type='text' class='form-control' name='genre' />
      </div>
      <div class="form-area">
        <label for='themes'>Lyrical themes</label>
        <input v-model='album.themes' type='text' class='form-control' name='themes' />
      </div>
      <div class="form-area">
        <label for='labelId'>Current label</label>
        <select v-model='album.label_id'>
          <option v-for="label in labels" v-bind:value="label.id"
            v-bind:key="label.id">
            {{ label.name }}
          </option>
        </select>
      </div>
      <div class="form-area">
        <label for='info'>Info</label>
        <textarea v-model="album.info" name="info" id="info" ></textarea>
      </div>
      <input type='submit' value='Login' />
    </form>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AlbumForm',
  props: ['albumId'],
  data () {
    return {
      album: {
        name: '',
        location: '',
        genre: '',
        themes: '',
        info: '',
        country_id: '',
        album_status_id: '',
        label_id: '',
        formed_in: new Date(Date.now()).getFullYear(),
        user_id: this.$store.state.user.id
      },
      countries: [],
      albumStatuses: [],
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
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/albums`,
          this.album, headers)

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
      //   axios.get(`${process.env.VUE_APP_API_URL}/api/v1/album_statuses`),
      //   axios.get(`${process.env.VUE_APP_API_URL}/api/v1/labels`)
      // ])
      // this.countries = responses[0].data
      // this.albumStatuses = responses[1].data
      // this.labels = responses[2].data
      const albumId = this.$route.params.id
      if (albumId) {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/api/v1/albums/${albumId}`
        )
        this.album = response.data
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

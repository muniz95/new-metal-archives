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
        <label for='location'>Release type</label>
        <span>{{album.album_type}}</span>
        <!-- <input v-model='album.band.name' type='text' class='form-control' name='location' /> -->
      </div>
      <div class="form-area">
        <label for='location'>Release date</label>
        <span>{{formatDate(album.album_date)}}</span>
      </div>
      <div class="form-area">
        <label for='labelId'>Current label</label>
        <span>{{album.label.name}}</span>
      </div>
      <div class="form-area">
        <label for='country'>Catalog ID</label>
        <input type="text" v-model="album.catalog_id" name="catalogId" id="catalogId">
      </div>
      <div class="form-area">
        <label for='country'>Number of copies (if limited)</label>
        <input type="text" v-model="album.num_copies" name="numCopies" id="numCopies">
      </div>
      <div class="form-area">
        <label for='country'>Version description</label>
        <input type="text" v-model="album.description" name="description" id="description">
      </div>
      <div class="form-area">
        <label for='country'>Album line-up</label>
        <span>Click here to edit the album line-up</span>
      </div>
      <div class="form-area">
        <label for='country'>Additional notes</label>
        <input type="text" v-model="album.additional_notes" name="notes" id="notes">
      </div>
      <div class="form-area">
        <label for='country'>Recording information</label>
        <input type="text" v-model="album.recording_info" name="recInfo" id="recInfo">
      </div>
      <div class="form-area">
        <label for='country'>Identifiers</label>
        <input type="text" v-model="album.identifiers" name="identifiers" id="identifiers">
      </div>
      <input type='submit' value='Login' />
      <button>Cancel</button>
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
        num_copies: '',
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
      return album.participations
        ? album.participations.map(x => x.band.name).join(', ')
        : ''
    },
    formatDate (date) {
      return new Date(date).toLocaleDateString()
    },
    async handleSubmit () {
      const headers = {
        headers: {
          Authorization: this.$store.state.jwt
        }
      }
      try {
        let response
        if (this.album.id) {
          response = await axios.put(`${process.env.VUE_APP_API_URL}/albums/${this.album.id}`,
            this.album, headers)
        } else {
          response = await axios.post(`${process.env.VUE_APP_API_URL}/albums`,
            this.album, headers)
        }

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
      //   axios.get(`${process.env.VUE_APP_API_URL}/countries`),
      //   axios.get(`${process.env.VUE_APP_API_URL}/album_statuses`),
      //   axios.get(`${process.env.VUE_APP_API_URL}/labels`)
      // ])
      // this.countries = responses[0].data
      // this.albumStatuses = responses[1].data
      // this.labels = responses[2].data
      const albumId = this.$route.params.id
      if (albumId) {
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/albums/${albumId}`
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

<template>
  <table>
    <tr>
      <router-link :to="{name: 'NewAlbum'}">
        <button>
          <font-awesome-icon aria-hidden="true" icon="plus" title="Add a band" />
        </button>
      </router-link>
    </tr>
    <tr>
      <th></th>
      <th>Album name</th>
      <th>Type</th>
      <th>Year</th>
      <th>Reviews</th>
    </tr>
    <tr v-for='album in albums' v-bind:key="album.name">
      <td style="align: center">
        <button>
          <font-awesome-icon icon="screwdriver" />
        </button>
        <router-link :to="{name: 'AlbumEdit'}">
          <button>
            <font-awesome-icon icon='edit' />
          </button>
        </router-link>
      </td>
      <td>
        <router-link :to="{name: 'AlbumDetails', params: {
          album: album.album,
          id: album.album.id
        }}">
          {{album.album.name}}
        </router-link>
      </td>
      <td>{{album.album.album_type}}</td>
      <td>{{getYear(album.album.album_date)}}</td>
      <td></td>
    </tr>
  </table>
</template>

<script lang="ts">
export default {
  name: 'BandDiscography',
  props: ['bandId', 'albums'],
  methods: {
    getYear (date: string) {
      return new Date(date).getFullYear()
    }
  },
}
</script>

<style>

</style>

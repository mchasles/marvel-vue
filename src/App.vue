<template>
  <div id="app">
    <loader v-if="loading"></loader>
    <pagination :next="next" :previous="previous" :disabled-previous="disabledPrevious"></pagination>
    <marvel-characters-list v-if="!loading" :characters="characters"></marvel-characters-list>
  </div>
</template>

<script>
import MarvelCharactersList from './components/MarvelCharactersList'
import Loader from './components/Loader'
import Pagination from './components/Pagination'
// Import axios library for XHR requests
import axios from 'axios'
// User key to request Marvel API
const API_KEY = 'cefd21ddeeea8bc5232fa3fe67c57e0f'

export default {
  name: 'app',
  components: {
    MarvelCharactersList, Loader, Pagination
  },
  data () {
    return {
      loading: true,
      offset: 100,
      limit: 22,
      characters: null,
      currentOffset: null
    }
  },
  computed: {
    disabledPrevious: function () {
      return this.currentOffset <= this.offset
    }
  },
  created () {
    this.currentOffset = this.offset
    this.fetchCharacters()
      .then(this.loadCharacters)
      .catch(this.handleError)
  },
  methods: {
    fetchCharacters: function (offset) {
      this.loading = true
      return axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: API_KEY,
          limit: this.limit,
          offset: this.currentOffset
        }
      }).then(response => response.data.data.results)
    },
    loadCharacters (characters) {
      this.characters = characters
      this.loading = false
    },
    handleError (error) {
      this.error = error
      this.loading = false
    },
    next: function () {
      this.currentOffset = this.currentOffset + this.limit
      return this.fetchCharacters(this.currentOffset)
        .then(this.loadCharacters)
        .catch(this.handleError)
    },
    previous: function () {
      if (this.currentOffset - this.limit < this.offset) return
      this.currentOffset = this.currentOffset - this.limit
      return this.fetchCharacters(this.currentOffset)
        .then(this.loadCharacters)
        .catch(this.handleError)
    }
  }
}
</script>

<!-- Gloabl styles -->
<style>
body {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#app .loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

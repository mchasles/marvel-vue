<template>
  <div id="app">
    <loader v-if="loading"></loader>
    <marvel-characters-list v-if="!loading" :characters="characters"></marvel-characters-list>
  </div>
</template>

<script>
import MarvelCharactersList from './components/MarvelCharactersList'
import Loader from './components/Loader'
// Import axios library for XHR requests
import axios from 'axios'
// User key to request Marvel API
const API_KEY = 'cefd21ddeeea8bc5232fa3fe67c57e0f'

export default {
  name: 'app',
  components: {
    MarvelCharactersList, Loader
  },
  data () {
    return {
      loading: true,
      characters: null
    }
  },
  created () {
    this.fetchCharacters().then(characters => {
      this.characters = characters
      this.loading = false
    }).catch(() => {
      this.loading = false
    })
  },
  methods: {
    fetchCharacters: function () {
      return axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: API_KEY,
          limit: 22,
          offset: 100
        }
      }).then(response => response.data.data.results)
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

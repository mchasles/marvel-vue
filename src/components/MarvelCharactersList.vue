<template>
  <ul>
    <li v-for="character in characters">
      <img :src="getThumbnailSrc(character.thumbnail.path)">
      <p>{{character.name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'marvelCharactersList',
  props: ['characters'],
  data () {
    return {
      thumbnailSuffix: '/portrait_large.jpg'
    }
  },
  methods: {
    getThumbnailSrc: function (src) {
      return `${src}${this.thumbnailSuffix}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
  align-items: center;
  display: flex;
  margin: 10px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  margin-left: 10px;
}

</style>

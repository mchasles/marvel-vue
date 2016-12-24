<template>
  <div>
    <button v-bind:disabled="disabledPrevious" v-on:click="getPreviousPage()" >Previous</button>
    <button v-on:click="getNextPage()">Next</button>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    disabledPrevious: {
      type: Boolean
    },
    next: {
      type: Function,
      required: true
    },
    previous: {
      type: Function,
      required: true
    }
  },
  methods: {
    getPreviousPage: function () {
      this.previous()
    },
    getNextPage: function () {
      this.next()
    }
  }
}
</script>

<style scoped>
  div {
    padding: 10px;
  }
  button {
    padding: 8px;
    font-variant: small-caps;
    border-radius: 4px;
    border: 1px solid lightgray;
    background-color: ghostwhite;
  }
  button:disabled {
    opacity: 0.4;
  }
  button + button {
    margin-left: 10px;
  }
</style>

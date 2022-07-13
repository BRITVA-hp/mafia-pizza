<template>
  <header-app></header-app>
  <main-app></main-app>
  <footer-app></footer-app>
  <modal-city-app></modal-city-app>
  <modal-empty-app></modal-empty-app>
  <modal-basket-app></modal-basket-app>
  <modal-order-app></modal-order-app>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  created() {
    console.log(process.env.VUE_APP_API_BASE_URL)
  }
}
</script>

<style lang="sass">
  @import 'assets/sass/style.scss'
</style>
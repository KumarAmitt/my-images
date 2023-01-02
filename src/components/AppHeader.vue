<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
    {{ isLoggedIn }}
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Gallery</router-link>
        <a href="" class="item">Upload</a>
        <a href="" class="item" @click="logout">Logout</a>
      </div>
      <a v-else class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>

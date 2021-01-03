<template>
  <v-app class="flex-column" style="height: 100vh; overflow-y: hidden">
    <app-bar></app-bar>

    <v-main
      class="pa-0"
      :style="{
        flex: '1',
        overflowY: 'scroll',
      }"
    >
      <router-view />
    </v-main>

    <main-tabbar></main-tabbar>

    <audio ref="mxPlayer" src=""></audio>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";

import AppBar from "./components/appbar/AppBar";
import MainTabbar from "./components/tabbar/MainTabbar";

export default {
  name: "App",
  components: {
    AppBar,
    MainTabbar,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    ...mapMutations(["setAudio"]),
  },
  mounted() {
    this.setAudio(this.$refs.mxPlayer);
  },
  computed: {
    isSearch() {
      return /search/.test(this.$route.path);
    },
  },
};
</script>

<style lang="sass">
</style>

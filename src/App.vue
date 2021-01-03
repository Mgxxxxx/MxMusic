<template>
  <v-app>
    <app-bar></app-bar>

    <v-main
      :style="{
        marginTop: marginTop,
        transition: '.3s cubic-bezier(.25,.8,.5,1)',
        overflow: 'hidden',
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
    marginTop() {
      return this.isSearch ? "0px" : "50px";
    },
    viewHeight() {
      return this.isSearch ? "calc(100% - 50px)" : "calc(100% - 90px)";
    },
  },
};
</script>

<style lang="sass">
</style>

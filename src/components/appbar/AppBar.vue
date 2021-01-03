<template>
  <div
    :style="{
      marginTop: isSearching('appbarMt'),
      paddingBottom: isSearching('appbarPb'),
      transition: '.3s cubic-bezier(.25,.8,.5,1)',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '999',
    }"
  >
    <v-app-bar app height="49" style="position: relative" class="elevation-0">
      <div class="text-h5 font-weight-bold">
        {{ $route.meta.title }}
      </div>
    </v-app-bar>

    <!-- 搜索栏 -->
    <div class="d-flex align-center" style="position: absolute; width: 100%">
      <v-btn
        icon
        class="mr-n2"
        @click="exitSearch"
        :style="{ display: isShowBack }"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-text-field
        solo
        dense
        color="green"
        :hide-details="true"
        v-model="keyWord"
        placeholder="搜索"
        class="rounded-pill ma-2"
        prepend-inner-icon="mdi-magnify"
        @change="searchMusic"
        @focus="focusSearch"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { search, getMusicUrl } from "@/api";

import barMixin from "@/mixins/bar";

import { createSongList } from "@/utils/song";

export default {
  name: "AppBar",
  mixins: [barMixin],
  data() {
    return {
      selectedItem: -1,
      keyWord: "",
      songs: null,
      mxPlayer: null,
    };
  },
  methods: {
    ...mapMutations(["setShowTabbar", "setCurSong", "setPlayList"]),
    async searchMusic() {
      try {
        let res = await search(this.keyWord);
        // console.log(res.result.songs);
        this.songs = createSongList(res.result.songs);
        this.setPlayList(this.songs);
        console.log(this.getPlayList()[0]);
        if (!/searched/.test(this.$route.path)) {
          this.$router.replace("/search/searched");
        }
      } catch (e) {
        console.warn(e);
      }
    },
    async play(id, i) {
      try {
        let res = await getMusicUrl(id);
        let url = res.data[0].url;
        console.log(res.data[0].url);
        this.mxPlayer.src = url;
        this.setCurSong({ ...this.songs[i], url });
        this.mxPlayer.play();
      } catch (e) {
        console.warn(e);
      }
    },
    focusSearch() {
      this.setShowTabbar(false);
      //若当前页面不是search页面才能进行路由导航
      if (!/search/.test(this.$route.path)) {
        this.$router.push("/search");
      }
    },
    exitSearch() {
      this.keyWord = "";
      this.setShowTabbar(true);
      this.$router.go(-1);
    },
  },
  created() {
    this.$nextTick(() => {
      this.mxPlayer = this.getAudio();
    });
  },
  computed: {
    isShowBack() {
      return !this.$store.getters.getShowTabbar ? "" : "none";
    },
  },
};
</script>

<style scoped lang="scss">
</style>

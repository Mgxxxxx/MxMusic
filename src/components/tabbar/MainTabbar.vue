<template>
  <div
    style="position: fixed; bottom: 0; width: 100%"
    :style="{
      marginBottom: isSearching('musicControl'),
      transition: '.3s cubic-bezier(.25,.8,.5,1)',
    }"
  >
    <!-- 音乐控制器 -->
    <div
      class="rounded-r-pill grey lighten-2 pa-2 mx-2 d-flex align-center justify-space-between"
      style="max-height: 40px"
    >
      <div class="d-inline-block text-truncate" style="max-width: 200px">
        {{ songInfo }}
      </div>
      <v-btn icon @click="togglePlay">
        <v-icon>mdi-play-circle-outline</v-icon>
      </v-btn>
    </div>

    <!-- 底部导航 -->
    <v-bottom-navigation
      :value="active"
      color="green"
      height="49"
      style="justify-content: space-around"
      :style="{ visibility: isShowTabbar ? 'visible' : 'hidden' }"
    >
      <v-btn to="/home">
        <span>首页</span>
        <v-icon>mdi-music-circle</v-icon>
      </v-btn>

      <v-btn to="/profile">
        <span>我的</span>
        <v-icon>mdi-account-music</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import barMixin from "@/mixins/bar";

export default {
  name: "MainTabbar",
  mixins: [barMixin],
  data() {
    return {
      mxPlayer: null,
      active: 0,
    };
  },
  created() {
    this.$nextTick(() => {
      this.mxPlayer = this.getAudio();
      //   console.log(this.mxPlayer);
      this.active = /home/.test(this.$route.path) ? 0 : 1;
    });
  },
  computed: {
    songInfo() {
      let song = this.getCurSong();
      return song ? song.name + "-" + song.author : "songname";
    },
  },
  methods: {
    togglePlay() {
      this.mxPlayer.paused ? this.mxPlayer.play() : this.mxPlayer.pause();
    },
  },
};
</script>

<style scoped lang="scss">
</style>

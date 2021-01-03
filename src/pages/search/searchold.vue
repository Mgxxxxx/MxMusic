<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="20">
            <el-input placeholder="搜索" v-model="info" @change="_search">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button
              circle
              icon="el-icon-search"
              class="right"
              @click="deSearch"
            ></el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <ul>
          <li v-for="(item, index) in songs" :key="index">
            <span @click="getMusic(item.id)">song:{{ item.name }}</span>
            <span>author:{{ item.artist }}</span>
          </li>
        </ul>
      </el-main>
      <el-footer>
        <audio controls ref="mxPlayer"></audio>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import debounce from "../../utils/debounce.js";
import { search, getMusicUrl } from "../../api";

export default {
  name: "search",
  components: {
    tabbar,
  },
  data() {
    return {
      info: "",
      songs: [],
      curMusic: "",
    };
  },
  methods: {
    _search() {
      if (this.info === "") return;
      console.log(this.info);
      search(this.info)
        .then((res) => {
          console.log(res.result.songs);
          this.songs = [];
          res.result.songs.map((item) => {
            this.songs.push({
              id: item.id,
              name: item.name,
              artist: item.artists[0].name,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMusic(id) {
      getMusicUrl(id)
        .then((res) => {
          console.log(res);
          this.$refs.mxPlayer.src = res.data[0].url;
          console.log(this.$refs.mxPlayer.src);
          this.$refs.mxPlayer.play();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    deSearch() {
      return debounce(this._search, 1000);
    },
  },
};
</script>

<style lang="sass">
ul
    list-style: none
    padding: 0
    margin: 0

li
    margin: 0.5rem 0
span
    margin-left: 1rem
    &:first-child
        background: skyblue
        cursor: pointer

.right
    float: right
</style>

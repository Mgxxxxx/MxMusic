<template>
  <div>
    <mt-tab-container v-model="active" :swipeable="true">
      <mt-tab-container-item id="home">
        <mt-cell title="home"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="profile">
        <mt-cell title="profile"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="tabbar-and-control">
      <div class="control">control</div>
      <mt-tabbar v-model="active">
        <mt-tab-item id="home" @click.native="myClick">
          <img v-if="active !== 'home'" slot="icon" src="~images/music.png" />
          <img v-else slot="icon" src="~images/music-a.png" />
          <div>首页</div>
        </mt-tab-item>
        <mt-tab-item id="profile" @click.native="myClick">
          <img
            v-if="active !== 'profile'"
            slot="icon"
            src="~images/profile.png"
          />
          <img v-else slot="icon" src="~images/profile-a.png" />
          <div>我的</div>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    myClick() {
      console.log(this.active);
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar-and-control {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .mint-tab-item-label {
    div {
      font-size: 0.14rem;
    }
  }
}
</style>

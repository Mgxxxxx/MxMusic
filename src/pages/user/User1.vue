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
    <div class="control-and-tab">
      <control />
      <main-tabbar @tabChange="tabChange" />
    </div>
  </div>
</template>

<script>
import Control from "./Control";
import MainTabbar from "./MainTabbar";

export default {
  name: "user1",
  data() {
    return {
      active: "home",
    };
  },
  components: {
    Control,
    MainTabbar,
  },
  methods: {
    tabChange(curTab) {
      this.active = curTab;
    },
  },
};
</script>

<style scoped lang="scss">
.control-and-tab {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

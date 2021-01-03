<template>
  <div>
    <tabbar :isFixed="false">
      <tabbar-item
        :isActive="active === 'home'"
        @click.native="tabClick('home')"
      >
        <template v-slot:img>
          <img src="~images/music.png" alt="" />
        </template>
        <template v-slot:img-a>
          <img src="~images/music-a.png" alt="" />
        </template>
        <template v-slot:title> 首页 </template>
      </tabbar-item>
      <tabbar-item
        :isActive="active === 'profile'"
        @click.native="tabClick('profile')"
      >
        <template v-slot:img>
          <img src="~images/profile.png" alt="" />
        </template>
        <template v-slot:img-a>
          <img src="~images/profile-a.png" alt="" />
        </template>
        <template v-slot:title> 个人 </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/tabbar/Tabbar";
import TabbarItem from "components/tabbar/TabbarItem";

export default {
  name: "mainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    tabClick(tab) {
      this.active = tab;
      this.$emit("tabChange", tab);
      console.log(this.active);
    },
  },
};
</script>

<style scoped lang="scss">
</style>

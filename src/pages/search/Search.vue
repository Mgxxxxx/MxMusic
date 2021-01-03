<template>
  <div class="text-h5">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Search",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit("setShowTabbar", false);
    });
  },
  beforeRouteLeave(to, from, next) {
    next((vm) => {
      vm.$store.commit("setShowTabbar", true);
    });
  },
};
</script>

<style scoped lang="scss">
</style>

<template>
  <div class="tabbarItem">
    <div v-if="!isActive" class="img">
      <slot name="img">
        <img src="~images/music.png" alt="" />
      </slot>
    </div>
    <div v-else class="img-a">
      <slot name="img-a">
        <img src="~images/music-a.png" alt="" />
      </slot>
    </div>
    <div class="title" :style="activeStyle"><slot name="title">首页</slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data() {
    return {};
  },
  props: {
    activeColor: {
      type: String,
      default: "#2ecc71",
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : "";
    },
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 786px) {
  .tabbarItem {
    flex: 1;
    height: 0.49rem;
    text-align: center;
    font-size: 0.14rem;
    .img,
    .img-a {
      margin-bottom: 0.02rem;
      img {
        width: 0.27rem;
      }
    }
  }
}
</style>

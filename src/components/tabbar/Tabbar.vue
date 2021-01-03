<template>
  <div :class="{ tabbar: true, 'is-fixed': isFixed }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    isFixed: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  display: flex;
  padding-top: 0.02rem;
  background-color: #f6f6f6;
  box-shadow: 0 -0.01rem 0.01rem rgba(0, 0, 0, 0.1);
}

.is-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

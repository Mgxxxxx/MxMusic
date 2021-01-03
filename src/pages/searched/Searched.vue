<template>
  <div>
    <!-- <v-card class="mx-auto" max-width="350" tile> -->
    <v-list>
      <v-subheader class="text-h5">单曲</v-subheader>
      <v-list-item-group v-model="selectedItem" color="green">
        <v-list-item v-for="(item, i) in list" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="`${item.name}`" />
            <v-list-item-subtitle v-text="`${item.singer.name}`" />
            <v-list-item-subtitle v-text="`${item.alias || ''}`" />
            <div style="position: absolute; right: 16px">
              <v-btn icon>
                <v-icon>mdi-play-circle-outline</v-icon>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- </v-card> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Searched",
  data() {
    return {
      selectedItem: -1,
    };
  },
  methods: {
    ...mapGetters(["getPlayList"]),
  },
  computed: {
    list() {
      return this.getPlayList();
    },
  },
};
</script>

<style scoped lang="scss">
</style>

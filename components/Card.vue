<template>
  <v-card width="200" hover nuxt :to="'book/' + id">
    <v-img
      class="white--text align-end"
      height="300"
      width="200"
      :src="img_url"
    >
    </v-img>
    <div class="h-fixed">
      <v-card-text class="text--primary pb-2 font-weight-bold">
        <div>{{ title }}</div>
      </v-card-text>
      <v-card-subtitle> {{ author }} </v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "title" },
    author: { type: String, default: "author" },
    img_url: {
      type: String,
      default: "",
    },
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
.h-fixed {
  height: 120px;
}
</style>

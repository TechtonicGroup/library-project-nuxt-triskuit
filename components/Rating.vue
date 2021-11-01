<template>
  <div>
    <v-rating
      v-model="rating"
      hover
      dense
      length="5"
      color="black"
      background-color="black"
      class="black--text justify-center"
      :readonly="readOnly"
    />
    <input type="hidden" name="rating" :value="rating" />
  </div>
</template>

<script>
export default {
  props: {
    initRating: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      rating: this.initRating,
    };
  },
  // mounted() {
  //   console.log("setting new rating to " + this.rating);
  //   console.log(this);
  //   this.newRating = this.rating;
  // },
  computed: {
    readOnly() {
      return this.$nuxt.$route.name === "book-id";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

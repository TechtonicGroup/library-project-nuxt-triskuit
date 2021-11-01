<template>
  <div>
    <v-row class="justify-center my-6">
      <h1>Edit Book</h1>
    </v-row>
    <!-- <pre>{{ this.$store.state }}</pre> -->
    <Form :book="book" action="update" />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getBook", this.$route.params.id);
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

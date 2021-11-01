<template>
  <div>
    <v-row class="justify-center my-6">
      <h1>{{ header }}</h1>
    </v-row>
    <div class="d-flex flex-wrap gap justify-center w-auto">
      <Card
        v-for="book in books"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :img_url="book.cover_url"
        :id="book.id"
      />
    </div>
    <div v-if="books.length == 0" class="d-flex justify-center">
      <div>No Results</div>
    </div>
    <!-- <pre>{{ this.$store.state }}</pre> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Release the Kraken of Knowledge",
    };
  },
  created() {
    this.$store.dispatch("getBooks", this.$route.query.q);
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  watchQuery(newQuery) {
    this.$store.dispatch("getBooks", newQuery.q);
    this.header = `Results for "${newQuery.q}"`;
  },
};
</script>

<style lang="scss" scoped>
.gap {
  row-gap: 20px;
  column-gap: 20px;
}
</style>

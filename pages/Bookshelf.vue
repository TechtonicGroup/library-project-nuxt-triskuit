<template>
  <div>
    <v-row class="justify-center my-6">
      <h1>
        {{
          this.$route.query.q
            ? `Results for "${this.$route.query.q}"`
            : "Release the Kraken of Knowledge"
        }}
      </h1>
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
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("getBooks", this.$route.query.q);
  },
  computed: {
    ...mapState(["books"]),
  },
  watchQuery(newQuery) {
    this.$store.dispatch("getBooks", newQuery.q);
  },
  watch: {
    books: (val) => console.log(val),
  },
};
</script>

<style lang="scss" scoped>
.gap {
  row-gap: 20px;
  column-gap: 20px;
}
</style>

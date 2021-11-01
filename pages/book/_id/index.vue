<template>
  <v-container class="d-flex flex-column justify-center">
    <v-row class="justify-center">
      <v-col cols="6">
        <v-img :src="book.cover_url" :alt="book.title" />
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        {{ book.title }}
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        {{ book.author }}
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        {{ book.synopsis }}
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        {{ book.date_published }}
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        {{ book.pages }}
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="6">
        <Rating :initRating="parseInt(book.rating)" />
      </v-col>
    </v-row>
    <v-row class="justify-center mt-8">
      <v-btn class="mr-2" :to="book.id + '/edit'">Edit</v-btn>
      <v-btn color="red" class="mr-2 white--text" @click="deleteBook"
        >Delete</v-btn
      >
      <v-btn color="#444" to="/bookshelf" class="white--text">Back</v-btn>
    </v-row>
    <!-- <pre>{{ book }}</pre> -->
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getBook", this.$route.params.id);
  },
  computed: {
    ...mapState([book]),
  },
  methods: {
    deleteBook() {
      axios
        .delete(`http://localhost:3000/books/${this.$route.params.id}`)
        .then(this.$router.push("/bookshelf"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

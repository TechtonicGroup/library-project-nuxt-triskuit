<template>
  <div>
    <form @submit.prevent="submit">
      <v-row>
        <v-col>
          <v-text-field
            label="Title"
            name="title"
            outlined
            required
            autocomplete="off"
            :value="book.title"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Author"
            name="author"
            outlined
            required
            autocomplete="off"
            :value="book.author"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Cover URL"
            name="cover_url"
            outlined
            autocomplete="off"
            :value="book.cover_url"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
            label="Synopsis"
            name="synopsis"
            outlined
            :value="book.synopsis"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date Published"
                name="date_published"
                append-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                :value="book.date_published"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-text-field
            label="Pages"
            name="pages"
            type="number"
            outlined
            :value="book.pages"
          />
        </v-col>
      </v-row>
      <v-row class="justify-center mb-10">
        <div>
          <Rating :initRating="Number(book.rating)" />
        </div>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn type="Submit" color="blue" class="mr-4 white--text"
            >Submit</v-btn
          >
          <v-btn to="/bookshelf">Cancel</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
  }),
  methods: {
    submit(e) {
      const formData = Object.fromEntries(new FormData(e.target));
      console.log(formData);
      if (this.action === "create") {
        axios
          .post("http://localhost:3000/books", formData)
          .then(this.$router.push("/bookshelf"))
          .catch((err) => console.log(err));
      } else {
        axios
          .patch(`http://localhost:3000/books/${this.book.id}`, formData)
          .then(this.$router.push("/bookshelf"))
          .catch((err) => console.log(err));
      }
    },
  },
  props: {
    book: Object,
    action: String,
  },
};
</script>

<style lang="scss" scoped>
</style>

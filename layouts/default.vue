<template>
  <v-app>
    <v-app-bar app>
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="mr-8">Library Project</v-toolbar-title>
        <div class="gap">
          <v-btn v-for="link in links" :key="link.name" :to="link.path" text>
            {{ link.name }}
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-responsive max-width="200">
          <form @submit.prevent="submit">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              append-icon="mdi-magnify"
              solo-inverted
              clearable
              @submit.prevent="searchSubmit"
            ></v-text-field>
          </form>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <nuxt></nuxt>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "Bookshelf", path: "/bookshelf" },
        { name: "Add Book", path: "/add" },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    submit(e) {
      this.$router.push(`/bookshelf?q=${e.target[0].value}`);
    },
  },
};
</script>

<style scoped>
.gap {
  display: flex;
  column-gap: 5px;
}
</style>

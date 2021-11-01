<template>
  <div>
    <v-row class="justify-center my-6">
      <h1>Add A Book</h1>
    </v-row>
    <Form :book="book" action="create" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: null,
        author: null,
        synopsis: null,
        date_published: null,
        image_url: null,
        pages: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <v-parallax dark src="/library_door.jpeg" height="900">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div class="hero__title">Books.</div>
          <div class="hero__description">Read em &amp; weep</div>
        </v-col>
      </v-row>
    </v-parallax>

    <section class="main mt-10">
      <h1 class="mb-8">Welcome to the Library</h1>

      <p class="main__p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        mollitia dolorem in adipisci obcaecati suscipit vel aliquam, dolor
        itaque velit?
      </p>

      <v-btn to="/bookshelf" class="mb-8" nuxt>See Books</v-btn>

      <p class="main__p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione neque
        amet unde magnam. Excepturi quo deleniti quisquam ipsam est asperiores!
      </p>

      <v-btn to="/add" nuxt>Add A Book</v-btn>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("static/library_door.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    position: relative;
    margin: 20px;
    bottom: -170px;
    width: 90%;
    text-align: center;
  }

  &__title {
    font-size: 40px;
    font-weight: 700;
    background: white;
    width: 100%;
    color: black;
  }

  &__description {
    font-size: 20px;
    font-weight: 700;
    background: white;
    margin-top: 20px;
    width: 100%;
    color: black;
  }
}

.main {
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  &__link {
    text-decoration: none;
    border: 1px solid black;
    border-radius: 5px;
    padding: 6px 10px;
    color: black;
    margin: 4px 0;
    cursor: pointer;
    text-align: center;
    font-size: 16px;

    &--solid {
      background: black;
      color: white;
      border: none;
    }

    &--delete {
      background: red;
      color: white;
      border: none;
    }
  }

  &__p {
    text-align: justify;
  }
}
</style>

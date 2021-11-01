import axios from "axios";

export const state = () => ({
  counter: 0,
  books: [],
  book: {},
});

export const mutations = {
  setBooks(state, data) {
    state.books = data;
  },
  setBook(state, data) {
    state.book = data;
  },
};

export const actions = {
  getBooks(context, searchTerm) {
    const endpoint = searchTerm
      ? `http://localhost:3000/books?q=${searchTerm}`
      : "http://localhost:3000/books";
    axios
      .get(endpoint)
      .then((res) => context.commit("setBooks", res.data))
      .catch((err) => console.log(err));
  },
  getBook(context, id) {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => context.commit("setBook", res.data))
      .catch((err) => console.log(err));
  },
};

export const getters = {
  books(state) {
    return state.books;
  },
  book(state) {
    return state.book;
  },
};

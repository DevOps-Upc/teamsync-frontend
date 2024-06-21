<script>
import libraryService from '../services/library.service.js';
export default {
  name: 'BookList',
  data() {
    return {
      unfeched: true,
      books: []
    }
  },
  methods: {
    openNewTab(url) {
      window.open(url, '_blank');
    }
  },
  created() {
    libraryService().then(books => {
      this.books = books
      this.unfeched = false;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>
<template>
  <div class="my-container">
    <pv-card v-for="book in books" :key="book.id">
      <template #title>
        <div class="align-center">{{ book.title }}</div>
      </template>
      <template #subtitle>
        <p class="align-center">{{ book.author }}</p>
      </template>
      <template #content>
        <p>{{ book.description }}</p>
      </template>
      <template #footer>
        <p class="align-center">
          <pv-button @click="openNewTab(book.link)" class="align-center">Read more</pv-button>
        </p>
      </template>
    </pv-card>
  </div>
</template>
<style scoped>
.my-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
}
.my-container div{
  max-width: 26rem;
  min-width: 20rem;
}
</style>
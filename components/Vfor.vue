<script setup>
import { ref } from "vue";

// Array of people
let peoples = ref(['Vova', 'Daniel', 'Alona']);

// Array of books, each as an object
const books = ref([
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    publicationYear: 1949
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Tragedy',
    publicationYear: 1925
  },
  {
    id: 4,
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    publicationYear: 1851
  },
  {
    id: 5,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    genre: 'Historical Fiction',
    publicationYear: 1869
  }
]);

// Array of movies, each as an array of strings
const movies = ref([
  ['The Shawshank Redemption', 'Frank Darabont', 'Drama', '1994'],
  ['The Godfather', 'Francis Ford Coppola', 'Crime', '1972'],
  ['The Dark Knight', 'Christopher Nolan', 'Action', '2008'],
  ['Pulp Fiction', 'Quentin Tarantino', 'Crime', '1994'],
  ['Forrest Gump', 'Robert Zemeckis', 'Drama', '1994']
]);

// Object of games, each as an object with various properties
const games = ref({
  game1: {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    platform: ['PC', 'Xbox', 'PS'],
    developer: 'Nintendo',
    genre: 'Action-adventure',
    releaseYear: 2017,
    ratings: { metacritic: 90, user: 4.8 }
  },
  game2: {
    id: 2,
    title: 'The Witcher 3: Wild Hunt',
    platform: ['PC', 'Xbox', 'PS'],
    developer: 'CD Projekt Red',
    genre: 'Action RPG',
    releaseYear: 2015,
    ratings: { metacritic: 90, user: 4.8 }
  },
  game3: {
    id: 3,
    title: 'Red Dead Redemption 2',
    platform: ['PC', 'Xbox', 'PS'],
    developer: 'Rockstar Games',
    genre: 'Action-adventure',
    releaseYear: 2018,
    ratings: { metacritic: 90, user: 4.8 }
  },
  game4: {
    id: 4,
    title: 'God of War',
    platform: ['PC', 'Xbox', 'PS'],
    developer: 'Santa Monica Studio',
    genre: 'Action-adventure',
    releaseYear: 2018,
    ratings: { metacritic: 90, user: 4.8 }
  },
  game5: {
    id: 5,
    title: 'Minecraft',
    platform: ['PC', 'Xbox', 'PS'],
    developer: 'Mojang Studios',
    genre: 'Sandbox',
    releaseYear: 2011,
    ratings: { metacritic: 90, user: 4.8 }
  }
});
</script>

<template>
  <div class="container">
    <!-- Peoples -->
    <section class="section">
      <h1>Peoples</h1>
      <ul class="list">
        <li v-for="(person, index) in peoples" :key="index" class="item">{{ `${person} ${index}` }}</li>
      </ul>
    </section>

    <!-- Books -->
    <section class="section">
      <h1>Books</h1>
      <ul class="list">
        <li v-for="(book, index) in books" :key="index" class="item">
          <p><strong>ID:</strong> {{ book.id }}</p>
          <p><strong>Title:</strong> {{ book.title }}</p>
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p><strong>Genre:</strong> {{ book.genre }}</p>
          <p><strong>Publication Year:</strong> {{ book.publicationYear }}</p>
        </li>
      </ul>
    </section>

    <!-- Movies -->
    <section class="section">
      <h1>Movies</h1>
      <ul class="list">
        <li v-for="(movie, index) in movies" :key="index" class="item">
          <ul>
            <li v-for="(detail, i) in movie" :key="i">{{ detail }}</li>
          </ul>
        </li>
      </ul>
    </section>

    <!-- Games -->
    <section class="section">
      <h1>Games</h1>
      <ul class="list">
        <!-- Iterate over each game -->
        <li v-for="(game, key) in games" :key="key" class="item">
          <!-- Display basic information of the game -->
          <p><strong>Game ID:</strong> {{ game.id }}</p>
          <p><strong>Title:</strong> {{ game.title }}</p>
          <p><strong>Platform:</strong> {{ game.platform.join(', ') }}</p>
          <p><strong>Developer:</strong> {{ game.developer }}</p>
          <p><strong>Genre:</strong> {{ game.genre }}</p>
          <p><strong>Release Year:</strong> {{ game.releaseYear }}</p>
          <p><strong>Ratings:</strong> Metacritic: {{ game.ratings.metacritic }}, User: {{ game.ratings.user }}</p>
		 
        </li>
		<br/>
		<li v-for="(property, i) in games" :key="i" class="item">{{ property }}</li>
      </ul>
    </section>
  </div>
</template>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    border-radius: 8px;
}

.section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
}

.list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fafafa;
}

.item p {
    margin: 5px 0;
}

ul ul {
    margin-left: 20px;
}

section {
    overflow-x: auto;
}
</style>

<script setup>
import GamingCard from './gaming-card.component.vue'
import GamingService from "../services/gaming.service.js"
import { ref } from 'vue'

const gamingService = new GamingService()

const gameList = ref([])

gamingService.getMovies().then((data) => gameList.value = data)
</script>

<template>
  <h2 class="gaming-list-title">Gaming List</h2>
  <div class="gaming-list-container">
    <p v-if="!gameList.length">Loading ...</p>
    <gaming-card
        v-else
        v-for="game of gameList"
        :code="game.id"
        :title="game.title"
        :description="game.short_description"
        :platform="game.platform"
        :thumbnail="game.thumbnail"
        :publisher="game.publisher"
        :developer="game.developer"
        :release-date="game.release_date"
        :btn-url="game.freetogame_profile_url"
    />
  </div>
</template>

<style scoped>
.gaming-list-title {
  max-width: 108rem;
  margin-inline: auto;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
}
.gaming-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 2.4rem;
  max-width: 108rem;
  margin-inline: auto;
}
</style>
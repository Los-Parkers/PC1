<script setup>
import PvCard from 'primevue/card'
import PvButton from 'primevue/button'

defineProps({
  code: Number,
  title: String,
  description: String,
  thumbnail: String,
  platform: String,
  publisher: String,
  developer: String,
  releaseDate: String,
  btnUrl: String,
})

</script>

<template>
  <pv-card class="card">
    <template #header>
      <img :src="thumbnail" :alt="title" />
    </template>
    <template #title>
      <h3 class="card-title">{{ title }}</h3>
    </template>
    <template #content>
      <div class="card-content">
        <p class="card-description">{{ description }}</p>
        <div class="card-additional">
          <p class="card-platform">Platform: <strong>{{ platform }}</strong></p>
          <p class="card-publisher">Publisher: <strong>{{ publisher }}</strong></p>
          <p class="card-developer">Developed by: <strong>{{ developer }}</strong></p>
          <p class="card-release-date">Released at: <strong>{{ releaseDate }}</strong></p>
        </div>
        <a :href="btnUrl" target="_blank">
          <pv-button class="card-btn" label="See more" />
        </a>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
}
img {
  width: 100%;
}
p {
  font-size: 1.4rem;
}
.card-title {
  padding-top: 2.4rem;
  padding-inline: 2rem;
}
.card-content {
  padding-bottom: 2.4rem;
  padding-inline: 2rem;
}
.card-description {
  margin-bottom: 1.2rem;
  line-height: 1.6;
}
.card-additional {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
}
.card-btn {
  height: 3.6rem;
  padding-inline: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
}
</style>
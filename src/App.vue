<script setup>
import GamingList from "@/gaming/components/gaming-list.component.vue";
import Toolbar from '@/public/components/toolbar.component.vue'
import CustomFooter from "@/public/components/custom-footer.component.vue";
</script>

<template>
  <header>
    <toolbar />
  </header>
  <main>
    <gaming-list />
  </main>
  <custom-footer />
</template>

<style scoped>

</style>

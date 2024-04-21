<script setup>
const author = "U20201C410 - Marcelo Fabian Garro Vega 😊"
</script>

<template>
  <footer class="footer">
    <p class="copyright">Copyright © 2024 Gaming List, inc. All rights reserved.</p>
    <p class="author">Developed by {{ author }}</p>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-inline: 3.2rem;
  height: 6.4rem;
  background: #10b981;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}
.copyright {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
}
.author {
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
}
</style>
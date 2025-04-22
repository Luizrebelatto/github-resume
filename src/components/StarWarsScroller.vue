=<template>
  <div>
    <section class="intro">
      A long time ago, in a galaxy far,<br> far away....
    </section>

    <section class="logo-text">
        <h1>Star Wars</h1>
    </section>

    <div id="scroller">
      <div id="content">
        <p id="title">Episode LXI</p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Class aptent taciti sociosqu ad litora torquent...</p>
        <p>Nulla metus metus, ullamcorper vel, tincidunt sed...</p>
        <p>Etiam ultrices. Suspendisse in justo eu magna luctus...</p>
        <p>Ut ultrices ultrices enim. Curabitur sit amet mauris...</p>
      </div>
    </div>

    <!-- Área das estrelas -->
    <div v-for="(star, index) in stars" :key="index"
         class="stars"
         :style="{ top: star.top + 'px', left: star.left + 'px' }">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stars = ref([])

function randomPosition() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.floor(Math.random() * height) // ← altura
    const y = Math.floor(Math.random() * width)  // ← largura
    return { top: x, left: y }
}

onMounted(() => {
  const totalStars = 600
  for (let i = 0; i < totalStars; i++) {
    stars.value.push(randomPosition())
  }
})
</script>

<style scoped>
.stars {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  z-index: 0;
}
</style>

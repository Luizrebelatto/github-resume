<template>

 <div v-if="!repos.length && !loading" class="search">
      <input v-model="username" placeholder="Enter an username" />
      <button @click="buscarRepos">Search</button>
    </div>

    <p v-if="loading" class="loading">Loading Repositories...</p>
  <div v-if="repos.length && !loading">
    <section class="intro">
      A long time ago, in a galaxy far,<br> far away....
    </section>

    <section class="logo-text">
        <h1>Github Repositories</h1>
    </section>

    <div id="scroller">
      <div id="content">
        <p id="title">{{ username }}</p>
        <br>
        <p v-for="repo in repos" :key="repo.id">⭐ {{ repo.name }}</p>
      </div>
    </div>

    <div v-for="(star, index) in stars" :key="index"
         class="stars"
         :style="{ top: star.top + 'px', left: star.left + 'px' }">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api.ts'

const stars = ref([])
const username = ref('')
const repos = ref([])
const loading = ref(false)

function randomPosition() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.floor(Math.random() * height) // ← altura
    const y = Math.floor(Math.random() * width)
    return { top: x, left: y }
}

onMounted(() => {
  const totalStars = 600
  for (let i = 0; i < totalStars; i++) {
    stars.value.push(randomPosition())
  }
})
async function buscarRepos() {
  if (!username.value) return
  loading.value = true
  try {
    const { data } = await api.getUserRepo(username.value)
    repos.value = data
  } catch (error) {
    alert("❌ Error when searching repositories ❌")
    repos.value = []
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  margin-top: 20vh;
  gap: 10px;
  z-index: 10;
  position: relative;
}

.search input {
  padding: 8px;
  font-size: 1rem;
  z-index: 10;
  position: relative;
}

.search button {
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  position: relative;
}

.loading {
  text-align: center;
  margin-top: 30vh;
  font-size: 1.2rem;
  color: white;
}
.stars {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  z-index: 0;
}
</style>
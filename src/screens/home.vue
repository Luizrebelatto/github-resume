<template>
    <div v-if="!repos.length && !loading" class="search">
      <input ref="inputRef" v-model="username" placeholder="Enter an username" class="input"/>
      <button class="neon-button" @click="getRepos">Search</button>
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
          <p id="title">{{ userTitle }}</p>
          <br>
          <p v-for="repo in repos" :key="repo.id">{{ repo.name }}</p>
        </div>
      </div>

      <div v-for="(star, index) in stars" :key="index"
          class="stars"
          :style="{ top: star.top + 'px', left: star.left + 'px' }">
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeMount, nextTick, watch } from 'vue'
import api from '../services/api.ts'

const stars = ref([])
const username = ref('')
const repos = ref([])
const loading = ref(false)

const inputRef = ref(null)

function randomPosition() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.floor(Math.random() * height)
    const y = Math.floor(Math.random() * width)
    return { top: x, left: y }
}

onBeforeMount(() => {
  const savedUsername = localStorage.getItem('github_username')
  if (savedUsername) {
    username.value = savedUsername
  }
})

async function getRepos() {
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
    username.value = ''
    await nextTick()
    inputRef.value?.focus()
  }
}

onMounted(() => {
  // const instance = getCurrentInstance()
  // if (instance) {
  //   console.log('Username on mount:', instance.proxy.username)
  // }

  const totalStars = 600
  for (let i = 0; i < totalStars; i++) {
    stars.value.push(randomPosition())
  }

  if (username.value) {
    getRepos()
  }
})

const userTitle = computed(() => {
  return username.value || ''
})


</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
  z-index: 10;
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

.neon-button {
  background-color: #0f0f0f;
  color: #00ffff;
  border: 2px solid #00ffff;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff;
  box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  background-clip: padding-box;
  transition: all 0.3s ease;
}

.neon-button:hover {
  box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff;
  transform: scale(1.05);
}

.search input {
  padding: 10px 14px;
  font-size: 1rem;
  border: 2px solid #00ffff;
  border-radius: 8px;
  background-color: #000;
  color: #00ffff;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
}

.search input::placeholder {
  color: #888;
}

.search input:focus {
  border-color: #ffcc00;
  box-shadow: 0 0 5px #ffcc00;
}
</style>
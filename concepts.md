# Concepts Learned

## Computed

used to store a value based on dependencies, we can make a comparison with useMemo
```javascript
const userTitle = computed(() => {
  return username.value || ''
})
```

## Style

the changes will only be applied to the current component, not to another one
```css
<style scoped>
  .text {
    color: red;
  }
</style>
```

if you want to use scss, set it like this
```javascript
<style lang="scss" scoped>
.wrapper {
  display: flex;

  .text {
    color: red;
  }
}
</style>
```

## setup

Its modern way that was implemented on vue 3
- less code
- any automatically exposed to the template 
- no need use `export default`, `defineComponent` and `return`

With `setup`:
```javascript
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>

```

without `setup`:
```javascript
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return { count, increment }
  }
}
</script>
```

## onBeforeMount
- run before the template is rendered in the DOM.
- Validate something before render
```javascript
onBeforeMount(() => {
  const savedUsername = localStorage.getItem('github_username')
  if (savedUsername) {
    username.value = savedUsername
  }
})
```

## onMounted
- hook after the component has been mounted in the DOM
- use to search data
- manipulate dom
```javascript
onMounted(() => {
  const totalStars = 600
  for (let i = 0; i < totalStars; i++) {
    stars.value.push(randomPosition())
  }

  if (username.value) {
    getRepos()
  }
})
```

# nextTick
- wait DOM be updated after the first state change
- after you delete the value inside input, so with nextTick he focus again
```javascript
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
```

## getCurrentInstance
- provides internal access to the current component
```javascript
const instance = getCurrentInstance()
  if (instance) {
    console.log('Username on mount:', instance.proxy.username)
  }
```

## mixin
- reuse logic between components
- Mixin isnt supported vue 3
```javascript
<script>
import capitalizeMixin from './mixins/capitalizeMixin';

export default {
  name: 'formattedName',
  mixins: [capitalizeMixin],
  data() {
    return {
      nome: "Luiz Gabriel"
    };
  },
  computed: {
    formattedName() {
      return this.capitalizeWords(this.name);
    }
  }
}
</script>

<template>
  <div>
    <p>Nome formatted: {{ formattedName }}</p>
  </div>
</template>
```

## defineComponent
- When not using `<script setup>`
- export components
```javascript
<template>
  <div>
    <p>{{ userTitle }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, defineComponent } from 'vue'
import { capitalizeWords } from '../utils/capitalizeWords'

export default defineComponent({
  setup() {
    const username = ref('john doe')

    const userTitle = computed(() => {
      return capitalizeWords(username.value)
    })

    onMounted(() => {
      console.log('Mounted')
    })

    return {
      username,
      userTitle,
    }
  }
})
</script>

```

## Watch
- observes changes in reactive variables and executes a function when they change.
- call function getRepos automatic way when username change
```javascript
watch(username, async (newVal, oldVal) => {
  if (newVal !== oldVal && newVal !== '') {
    loading.value = true
    await getRepos()
  }
})
```

## Reactive
- Reactive is fundamental concepts to understand
- any change you make is reflected in the interface
```javascript
<template>
  <div>
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <button @click="changeUserName">Change Name</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Gabriel',
  email: 'gabriel@example.com'
})

function changeUserName() {
  user.name = 'Fred'
  user.email = 'fred@example.com'
}
</script>

```
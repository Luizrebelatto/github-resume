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

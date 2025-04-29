# Concepts Learned

### Computed

used to store a value based on dependencies, we can make a comparison with useMemo
```javascript
const userTitle = computed(() => {
  return username.value || ''
})
```

### style

the changes will only be applied to the current component, not to another one
```css
<style scoped>
  .text {
    color: red;
  }
</style>
```

if you want to use scss, set it like this
```css
<style lang="scss" scoped>
.wrapper {
  display: flex;

  .text {
    color: red;
  }
}
</style>
```
<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h1 {
  color: black;
}
</style>

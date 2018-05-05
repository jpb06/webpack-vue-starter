<template>
  <h1> {{ msg }}</h1>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String,
      default: 'default message'
    }
  }
}
</script>

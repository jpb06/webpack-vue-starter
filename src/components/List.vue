<template>
  <ul>
    <li
      v-for="item in items"
      :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

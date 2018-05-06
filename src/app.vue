<template>
  <div class="full-width">
    <div class="center-content">
      <Hello name="World" />
    </div>
    <MessageToggle />
    <List :items="['list item 1', 'listen item 2']" />
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'

export default {
  components: {
    Hello,
    MessageToggle,
    List
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}
</style>

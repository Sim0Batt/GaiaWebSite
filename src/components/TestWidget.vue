<template>
  <div>
    <button @click="updateMessage()">Check Working BackEnd</button>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
import { fetchData } from '../api/api'

export default {
  name: 'TestWidget',
  data() {
    return {
      message: '',
    }
  },
  methods: {
    async updateMessage() {
      try {
        const response = await fetchData()
        this.message = response || 'No message received'
        console.log(this.message)
      } catch (error) {
        console.error('Error fetching data:', error)
        this.message = 'Error loading data'
      }
    },
  },
}
</script>

<style scoped>
div {
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  width: 20%;
}
.message {
  font-size: 20px;
}
</style>

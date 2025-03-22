<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage()">Check Temperature and Humidity</button>
  </div>
</template>

<script>
import { readTemperature } from '../api/api'

export default {
  name: 'temperature-widget',
  data() {
    return {
      message: 'Temperature: Hunidity:',
    }
  },
  methods: {
    async updateMessage() {
      try {
        const response = await readTemperature()
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
  width: 335px;
  margin: 10px;
}
</style>

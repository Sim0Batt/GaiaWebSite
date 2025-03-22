<template>
  <div>
    <p>Spegni Raspberry</p>
    <button @click="switchOff()">Spegni</button>
  </div>
</template>

<script>
import { switchOffRasp } from '@/api/api'

export default {
  methods: {
    async switchOff() {
      try {
        const response = await switchOffRasp()
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
  width: 150px;
  margin: 10px;
}
p {
  padding-bottom: 5px;
}
</style>

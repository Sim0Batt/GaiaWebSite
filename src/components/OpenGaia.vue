<template>
  <div>
    <p>Open Gaia On Laptop</p>
    <button @click="openGaiaApp()">Apri Gaia</button>
  </div>
</template>

<script>
import { gaiaOpenApp } from '../api/api'
export default {
  name: 'OpenApp',
  data() {
    return {
      message: 'Gaia is Closed',
    }
  },
  methods: {
    async openGaiaApp() {
      this.message = await gaiaOpenApp()
    },
  },
}
</script>

<style scoped>
div {
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  margin-left: 10px;
}

.button {
  margin-top: 10px;
}
</style>

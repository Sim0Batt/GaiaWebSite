<template>
  <div class="request-container">
    <form @submit.prevent="requestGaia" class="request-form">
      <input type="text" placeholder="Request Gaia" v-model="gRequest" class="request-input" />
      <button :disabled="isLoading" @click="requestGaia()" type="submit" class="submit-btn">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { gaiaRequestOnLaptopRapid } from '@/api/api'

export default {
  name: 'RequestWidget',
  data() {
    return {
      gRequest: '',
      isLoading: false,
    }
  },
  methods: {
    async requestGaia() {
      try {
        if (this.gRequest) {
          this.isLoading = true
          const response = await gaiaRequestOnLaptopRapid(this.gRequest)
          this.message = response || 'No message received'
          console.log(this.message)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        this.message = 'Error loading data'
      } finally {
        this.isLoading = false
        this.gRequest = ''
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
.request-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  padding: 2rem;
}

.request-input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submint-btn {
  margin-top: 1rem;
}
.request-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>

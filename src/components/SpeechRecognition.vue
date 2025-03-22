<template>
  <div>
    <button @click="startRecognition()">Start Recognition</button>
    <p>{{ transcript }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { gaiaRequestOnLaptopVocal } from '@/api/api'

export default {
  data() {
    return {
      transcript: '',
      error: '',
    }
  },
  methods: {
    async startRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (!SpeechRecognition) {
        this.error = 'Speech recognition API not supported in this browser.'
        console.error(this.error)
        return
      }

      const recognition = new SpeechRecognition()
      recognition.lang = 'it-IT' // Set language to Italian
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      recognition.onresult = async (event) => {
        this.transcript = event.results[0][0].transcript
        try {
          if (this.transcript) {
            const response = await gaiaRequestOnLaptopVocal(this.transcript.toLocaleLowerCase())
            this.error = response || 'No message received'
            console.log(this.error)
          }
        } catch (error) {
          console.error('Error fetching data:', error)
          this.error = 'Error loading data'
        }
      }

      recognition.onerror = (event) => {
        if (event.error === 'not-allowed') {
          this.error =
            'Microphone access denied. Please allow microphone access in your browser settings and try again.'
        } else if (event.error === 'network') {
          this.error =
            'Network error occurred. Please check your internet connection and try again.'
        } else {
          this.error = `Speech recognition error: ${event.error}`
        }
        console.error('Speech recognition error', event)
      }

      recognition.onaudiostart = () => {
        console.log('Audio capturing started')
      }

      recognition.onaudioend = () => {
        console.log('Audio capturing ended')
      }

      recognition.start()
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

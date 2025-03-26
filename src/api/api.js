import axios from 'axios'
import { ref } from 'vue'

export const ipAddress = ref('127.0.0.1')

export const setIpAddress = (status) => {
  ipAddress.value = status
  console.log(ipAddress.value)
}

export const fetchData = async () => {
  try {
    const response = await axios.get(`https://${ipAddress.value}:8000/api/hello`)
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data.timestamp
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const readTemperature = async () => {
  try {
    const response = await axios.get('https://192.168.1.121:8000/api/readTemp/')
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data.response
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const gaiaRequestOnLaptopRapid = async (gRequest) => {
  try {
    const response = await axios.get(
      `https://${ipAddress.value}:8000/api/get_rapid_response/${gRequest}`,
    )
    if (!response || !response.data) {
      throw new Error('No data received')
    }
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const gaiaRequestOnLaptopVocal = async (gRequest) => {
  try {
    const response = await axios.get(
      `https://${ipAddress.value}:8000/api/get_vocal_response/${gRequest}`,
    )
    if (!response || !response.data) {
      throw new Error('No data received')
    }
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const switchOffRasp = async () => {
  try {
    const response = await axios.get('https://192.168.1.115:8000/api/poweroff/')
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data.response
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export default { fetchData, readTemperature, switchOffRasp }

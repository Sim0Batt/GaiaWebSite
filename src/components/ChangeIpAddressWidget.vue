<template>
  <div>
    <li v-for="address in listAddress" :key="address">
      <button class="li-item" @click="changeIpAddress(address)">Login with {{ address }}</button>
    </li>
  </div>
</template>

<script>
import { setIpAddress } from '@/api/api'
import { addressList } from '@/assets/variables'
import { useRouter } from 'vue-router'

export default {
  name: 'ChangeIpAddress',
  data() {
    return {
      listAddress: addressList,
    }
  },

  methods: {
    changeIpAddress(ipAddress) {
      setIpAddress(ipAddress)
    },
  },
  setup() {
    const router = useRouter()
    return { router }
  },
}
</script>

<style scoped>
div {
  border-radius: 10px;
  width: 550px;
}

.li-item {
  margin: 3px;
}

li {
  list-style-type: none;
}
</style>

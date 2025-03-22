<template>
  <div>
    <div class="horizontal-container">
      <TitleScreen class="title" />
      <ChangeIpAddressWidget />
    </div>
    <h2>Debug</h2>
    <div>
      <TestWidget v-if="isDebug" />
    </div>
    <h2>Comandi Gaia PC</h2>
    <div class="horizontal-container">
      <OpenGaia />
      <RequestsWidget />
      <SpeechRecognition />
    </div>
    <h2>Comandi Gaia Raspberry</h2>
    <div class="horizontal-container">
      <PowerOffRasp />
      <TemperatureWidget />
    </div>
  </div>
</template>

<script>
import TestWidget from './TestWidget.vue'
import OpenGaia from './OpenGaia.vue'
import TitleScreen from './TitleScreen.vue'
import TemperatureWidget from './TemperatureWidget.vue'
import RequestsWidget from './RequestsWidget.vue'
import ChangeIpAddressWidget from './ChangeIpAddressWidget.vue'
import PowerOffRasp from './PowerOffRasp.vue'
import SpeechRecognition from './SpeechRecognition.vue'

export default {
  name: 'DashboardView',
  components: {
    TestWidget,
    OpenGaia,
    TitleScreen,
    TemperatureWidget,
    RequestsWidget,
    ChangeIpAddressWidget,
    PowerOffRasp,
    SpeechRecognition
  },
  data() {
    return {
      isDebug: true,
    }
  },
}
</script>

<style scoped>
.horizontal-container {
  padding-top: 2%;
  display: flex;
  align-items: center;
}

.title {
  margin-bottom: 5%;
}

.change-ip-widget {
  background-color: gray;
  border-radius: 10px;
  margin: 10px;
}
</style>

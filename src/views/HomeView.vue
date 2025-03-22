<template>
  <div class="page-container">
    <div class="content-wrapper">
      <TitleScreen />
      <h1 class="separator">Gaia Laptop Commands</h1>
      <div class="horizontal-container">
        <TestWidget />
        <RequestsWidget />
        <SpeechRecognition />
      </div>
      <h1 class="separator">Gaia Raspberry Commands</h1>
      <div class="horizontal-container">
        <TemperatureWidget />
        <PowerOffRasp />
      </div>
    </div>
  </div>
</template>
<script>
import PowerOffRasp from '@/components/PowerOffRasp.vue'
import RequestsWidget from '@/components/RequestsWidget.vue'
import SpeechRecognition from '@/components/SpeechRecognition.vue'
import TemperatureWidget from '@/components/TemperatureWidget.vue'
import TestWidget from '@/components/TestWidget.vue'
import TitleScreen from '@/components/TitleScreen.vue'

export default {
  components: {
    PowerOffRasp,
    RequestsWidget,
    SpeechRecognition,
    TemperatureWidget,
    TestWidget,
    TitleScreen,
  },
}
</script>
<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
}

.separator {
  margin: 10px;
  text-align: center;
}

.horizontal-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>

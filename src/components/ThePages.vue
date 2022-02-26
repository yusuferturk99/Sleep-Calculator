<template>
  <div>
    <div v-if="$store.state.isLanguage == false">
      <language-changer></language-changer>
      <h1>Sleep Calculator</h1>
      <h2>Welcome to the sleep calculator!</h2>
      <h3>Do you want to go to bed now?</h3>
      <button type="button" class="button">Yes</button>
      <h3>or will you wake up at a certain time?</h3>
      <input type="time" v-model="this.$store.state.myWakeUpTime"><br><br>
      <button type="button" class="button" @click="goToWakeUp">
        Calculate wake-up time
      </button>
    </div>
    <div v-else>
      <language-changer></language-changer>
      <h1>Uyku Hesaplayıcı</h1>
      <h2>Uyku hesaplayıcısına hoş geldiniz!</h2>
      <h3>Şimdi mi uyuyacaksınız?</h3>
      <button type="button" class="button">Evet</button>
      <h3>ya da belirli bir saatte mi uyanacaksınız?</h3>
      <input type="time" v-model="this.$store.state.myWakeUpTime"><br><br>
      <button type="button" class="button" @click="goToWakeUp">Kalkma saatimi belirle</button>
    </div>
  </div>
</template>

<script>
import LanguageChanger from './LanguageChanger.vue'

export default {
  components: {
    LanguageChanger,
  },
  methods: {
    goToWakeUp(){
      // console.log(this.$store.commit.WakeUp);
      // this.$store.commit("WakeUp");
      this.$router.push('/wakeup')
    }
  },
};
</script>

<style>
.element {
}
</style>
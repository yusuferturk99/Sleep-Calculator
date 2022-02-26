<template>
  <div>
    <div class="classic">
      <p>If you go to sleep at</p> <input type="time" v-model="goToWakeUp"><p>You need to get up between these hours.</p>
      <br><br>
      <input type="time" disabled v-model="first">
      <input type="time" disabled v-model="second">
      <br>
      <br>
      <input type="time" disabled v-model="third">
      <input type="time" disabled v-model="fourth">
      <input type="time" disabled v-model="fifth">
      <input type="time" disabled v-model="sixth">
      <br><br>
      <button type="button" class="button" @click="goBack">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
    goToWakeUp(){
      this.$store.commit("WakeUp");
      console.log(this.$store.commit.WakeUp);
    },
    first(){
      this.$store.commit("myWakeUpTimeFirst", 1.30);
    },
    second(){
      this.$store.commit("myWakeUpTimeSecond", 3.00);
    },
    third(){
      this.$store.commit("myWakeUpTimeThird", 4.30);
    },
    fourth(){
      this.$store.commit("myWakeUpTimeFourth", 6.00);
    },
    fifth(){
      this.$store.commit("myWakeUpTimeFifth", 7.30);
    },
    sixth(){
      this.$store.commit("myWakeUpTimeSixth", 9.00);
    },
  },
};
</script>

<style scoped>
.classic{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
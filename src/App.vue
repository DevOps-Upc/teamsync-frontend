<script>
import LoginCard from "./login/pages/login-card.vue";
export default {
  name: 'App',
  title: 'DevSoft TeamSync',
  components: {
    LoginCard
  },
  data(){
    return{

    }
  },
  methods(){

  }
}
</script>

<template>

  <LoginCard></LoginCard>
  <router-view></router-view>

</template>

<style scoped>
</style>

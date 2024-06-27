<script>
export default {
  created(){
    this.$emit('logout');
  }
}
</script>

<template>
  <div class="centered-container">
    Logging out...
  </div>
</template>

<style scoped>
.centered-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
</style>
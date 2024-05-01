<script>
import ToolbarComponent from "./public/component/toolbarStudent.component.vue";
export default {
  name: 'app',
  title: 'DevSoft TeamSync',
  components: {ToolbarComponent},
  data(){
    return{

    }
  },
  methods(){

  }
}
</script>

<template>
  <ToolbarComponent></ToolbarComponent>
  <router-view></router-view>




</template>

<style scoped>

</style>

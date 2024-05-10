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
  <div class="mt-8 md:mt-7 sm:mt-8 xl:mt-7">
    <router-view></router-view>
  </div>

</template>

<style scoped>
.container{
  padding-top:61.45px;
}

</style>

<script>
import ToolbarComponent from "./public/component/toolbarStudent.component.vue";
import SidebarStudentComponent from "./public/component/sidebarStudent.component.vue";
export default {
  name: 'app',
  title: 'DevSoft TeamSync',
  components: {SidebarStudentComponent, ToolbarComponent},
  data(){
    return{

    }
  },
  methods(){

  }
}
</script>

<template>
  <div class="grid">
    <div class="col-1" >
      <sidebar-student-component></sidebar-student-component>
    </div>

    <div class="col-11">
      <router-view ></router-view>
    </div>

  </div>









</template>

<style scoped>



</style>

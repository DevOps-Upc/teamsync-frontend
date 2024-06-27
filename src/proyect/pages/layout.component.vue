<script>
import ToolbarComponent from "../../public/component/toolbarStudent.component.vue";

export default {
  name: "layout-component",
  components:{ToolbarComponent},
  data(){
    return{


    }

  },
  created() {

  },
  methods:{

  }
}

</script>

<template>
  <div style="height:56.65px">
    <ToolbarComponent></ToolbarComponent>
  </div>
  <div>
    <router-view></router-view>
  </div>



</template>

<style scoped>

</style>
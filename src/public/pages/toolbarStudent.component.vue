<script>


export default {
  name: "toolbar-student-component",
  title: "toolBarStudent",
  components:{},
  data(){
    return{
      item:[
        {label:'Home',to:'/home'},
        {label:'Task',to:'/task'},
        {label:'Members',to:'/members'},
        {label:'Request Expert',to:'/request_experts'},
        {label:'Calendar',to:'/calendar'}
      ]
    }
  },
  created() {
  },
  methods(){

  }
}
</script>

<template>
  <pv-toolbar class="toolbarStudent">
    <template #center>
      <div class="flex-column">
        <router-link v-for="item in item" :key="item.label" v-slot="{navigate,href}" :to="item.to">
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">
            {{item.label}}
          </pv-button>
        </router-link>
      </div>
    </template>

  </pv-toolbar>


</template>

<style scoped>
  .toolbarStudent{
    background-color: #2c3071;
  }
</style>
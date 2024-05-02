<script>


export default {
  name: "toolbar-student-component",
  title: "toolBarStudent",
  components:{},
  data(){
    return{
      item:[
        {label:'Home',to:'/id/home'},
        {label:'Task',to:'/id/tasks'},
        {label:'Members',to:'/id/members'},
        {label:'Request Expert',to:'/id/experts'},
        {label:'Calendar',to:'/id/calendar'}

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
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: #757FFF;

  }

</style>
<script>
import {ProyectApiService} from "../services/proyect-api.service.js";


export default {
  name: "project-members-add-or-edit",
  components: {},
  props:{
    integrate:null,
    visible:Boolean,

  },
  data(){
    return{
      submitted:false,
      searchIntegrate:""
    }

  },
  created() {
    this.proyectService = new ProyectApiService();

  },
  methods:{

  }
}
</script>

<template>
  <pv-dialog
    v-bind:visible="visible" :model="true" :style="{with:'450px'}">
    <h1>Add Members</h1>

    <div class="flex align-items-center mt-3">
      <label for="Search Member" class="mr-4">Name</label>
      <span class="p-float-label">
            <pv-input-text v-model.trim="searchIntegrate"
                           autofocus type="text"/>
      </span>
    </div>

  </pv-dialog>

</template>

<style scoped>

</style>
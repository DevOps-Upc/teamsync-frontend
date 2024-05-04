<script>





import {ProyectApiService} from "../services/proyect-api.service.js";


export default {
  name: "project-task-add-or-edit",
  components: {},
  props:{
    task:null,
    visible:Boolean,

  },
  data(){
    return{
      submitted:false,
      integrates:[]
    }
  },created() {
    this.proyectService = new ProyectApiService();

    this.proyectService.getAllIntegrate(0).then(
        response => {
          this.integrates= response.data;
          console.log(this.integrates)
        }
    )
  },
  methods:{
    onCancel(){
      this.$emit('cancel');
    },
    onSave(){
      this.submitted=true;
      this.$emit('save',this.task)
    }

  }
}
</script>

<template>
  <pv-dialog
    v-bind:visible="visible" :modal="true" :style="{width: '450px'}">
    <h1>Add Task</h1>

    <div class="flex align-items-center mt-3">
      <label for="name" class="mr-4">Name</label>
          <span class="p-float-label">
            <pv-input-text v-model.trim="task.name" :class="{ 'p-invalid': submitted && !task.name }"
                           autofocus required="true" type="text"/>
            <br><small v-if="submitted && !task.name" class="p-error">Title is required</small>
          </span>
    </div>

    <div class="flex align-items-center mt-3">
      <label for="date limited" class="mr-4">Integrate</label>
      <span class="p-float-label">
        <pv-dropdown v-model="task.id_integrate" :options="integrates"
        optionLabel="id" placeholder="Select a Integrate"/>

        <br><small v-if="submitted && !task.date" class="p-error">Date is required</small>
      </span>
    </div>

    <div class="flex align-items-center mt-3">
      <label for="date limited" class="mr-4">Date Limited</label>
      <span class="p-float-label">
        <pv-input-calendar v-model="task.date" showIcon iconDisplay="input" inputId="icondisplay"></pv-input-calendar>
        <br><small v-if="submitted && !task.date" class="p-error">Date is required</small>
      </span>
    </div>



    <template #footer>
      <pv-button label="Cancel" severity="danger" raised  @click="onCancel"/>
      <pv-button label="Save" severity="success" raised  @click="onSave"/>
    </template>
  </pv-dialog>
</template>

<style scoped>

</style>
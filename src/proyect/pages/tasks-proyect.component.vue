<script>


import {ProyectApiService} from "../services/proyect-api.service.js";
import ProjectTaskAddOrEdit from "../components/project-task-add-or-edit.component.vue";
import {Task} from "../model/Task.entity.js";


export default {
  name: "tasks-proyect",
  components: {ProjectTaskAddOrEdit},
  title: "Tasks",
  data(){
    return{
      tasksAssigned:[],
      tasksNoAssigned:[],
      taskDialog: false,
      selectTasks:[],
      submitted:false,
      task:{}

    }
  },created() {
    this.proyectService = new ProyectApiService();

    this.proyectService.getAllTask(0)
        .then(response => {
          response.data.map(x=>{
            if(x.id_integrate===null){
              this.tasksNoAssigned.push(x)
            }else{
              this.tasksAssigned.push(x)
            }
          })
        })

  },
  methods:{

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    onAddOrUpdateTaskCancel(){
      this.taskDialog=false;
      this.submitted=false;
    },
    onSaveTask(){
      this.submitted=true;
      if(this.task.id){


      }else{
        this.createTask();
      }
      this.taskDialog=false;
      this.task={};

    },
    createTask(){
      this.task.id=0;
      //Tarea no finalizada
      this.task.state=0;
      //Tarea relazionada con el projecto visto actualmente
      this.task.id_project=0;
      console.log(this.task.date)
      console.log(this.task)

      this.task= Task.fromDisplayTask(this.task);
      console.log(this.task);

      if (this.task.id_integrate === undefined) {
        this.task.id_integrate = null;
      }
      this.proyectService.createTask(this.task)
          .then(response=>{
            this.task= Task.toDisplayableTask(response.data);
            console.log("Despues del servicio")
            console.log(this.task)
            if(this.task.id_integrate === null){
              this.tasksNoAssigned.push(this.task);
            }else {
              this.tasksAssigned.push(this.task)
            }
            this.notifySuccessfulAction("Task Create")
          })


    },
    openDialog(){
      this.task={};
      this.submitted=false;
      this.taskDialog=true;
    }


  }

}
</script>

<template>
  <div class=" flex ml-2 sm:text-3xl">
    <h1>Tasks of Project</h1>
  </div>
  <div class="grid">
    <div class="col">
      <div class="DivTask">
        <h2>Assigned</h2>
        <div class="xl:grid sm:flex">
          <div class="xl:col-4 sm:flex-column" v-for="item in tasksAssigned" :key="item.id">
            <div class="card1" >
              <h3>{{item.name}}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="DivTask">
        <h2>Not Assigned</h2>
        <div class="xl:grid sm:flex">
          <div class="xl:col-4 sm:flex-column" v-for="item in tasksNoAssigned" :key="item.id">
            <div class="card1" >
              <h3>{{item.name}}</h3>
            </div>
          </div>
        </div>
      </div>


    </div>



  </div>
  <div class="flex justify-content-end">
    <pv-button icon="pi pi-plus" rounded aria-label="Filter" @click="openDialog"></pv-button>
  </div>

  <project-task-add-or-edit
      :task="task"
      v-bind:visible="taskDialog"
      v-on:cancel="onAddOrUpdateTaskCancel"
      v-on:save="onSaveTask"/>



</template>

<style scoped>
.DivTask {
  background-color: #c2ceff;
  border-radius: 16px;
  padding: 15px;
  margin: 10px;
  overflow: auto;

}
.card1{
  display:flex;
  border-radius:16px;
  align-items:center;
  padding:5px;
  background-color: white;
  margin-top:10px;
  >img{
    height:51px;
    width:51px;
    border-radius:50%;
    margin-right: 10px;
  }
}
h2 {
  font-style: normal;
  font-size:30px;
  font-weight: 500;
}

</style>
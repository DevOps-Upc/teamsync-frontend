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

    let projectId = Number(this.$route.params.id);
    this.proyectService = new ProyectApiService();

    this.proyectService.getAllTask(projectId)
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

  <div class="flex ml-2 sm:text-3xl">
    <h1>Tasks of Project</h1>
  </div>
  <div class="flex-row">

    <div class="p-2 m-2 border-round-xl  " id="TaskDiv">

        <h2>Assigned</h2>

      <div class="grid overflow-auto xl: h-13rem " >
        <div class="xl:col-4 md:col-6 sm:col-12"  v-for="item in tasksAssigned" :key="item.id" >
          <div class="card1">
            <div>
              <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
              <h3>{{item.name}}</h3>
            </div>
            <pv-button text>
              <i class="pi pi-pencil" style="font-size:2rem; color:black;"></i>
            </pv-button>

          </div>
        </div>
      </div>
    </div>


    <div class="p-2 m-2 border-round-xl mt-5 " id="TaskDiv">

      <h2>Not Assigned</h2>

      <div class="grid overflow-auto xl: h-13rem " >
        <div class="xl:col-4 md:col-6 sm:col-12"  v-for="item in tasksNoAssigned" :key="item.id" >
          <div class="card1">
            <div>
              <img src="https://citylimits.org/wp-content/uploads/2023/02/img.png">
              <h3>{{item.name}}</h3>
            </div>
            <pv-button text>
              <i class="pi pi-pencil" style="font-size:2rem; color:black;"></i>
            </pv-button>

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

#TaskDiv{
  background-color: #c2ceff;


}

.DivTask {
  background-color: #c2ceff;
  display:flex;
  border-radius: 16px;
  padding: 20px;
  margin: 10px;
  flex-wrap: wrap;
  overflow:auto;
}
.card1{
  display:flex;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius:16px;

  padding:5px;
  background-color: white;
  margin: 10px;

  >div{
    display:flex;
  }

  >div>img{
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
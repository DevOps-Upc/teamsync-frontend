<script>
import {ProyectApiService} from "../services/proyect-api.service.js";
import {FilterMatchMode} from "primevue/api";
export default {
  name: "home-proyect.component",
  title: "Home",
  data(){
    return {
      proyect:{},
      files:[],
      tasks:[],
      comments:[]

    }
  },
  created() {
    //Servico de Proyecto q selecciono (Uso el 0 proyect)
    this.proyectService = new ProyectApiService();
    this.proyectService.getProject(0)
        .then(response =>{
          this.proyect =response.data;
          console.log("datos")
          console.log(this.proyect)
        })

    //Servicio de Files a mostrar
    this.proyectService.getAllFiles(0)
        .then(response =>{
          this.files =response.data;
        })

    //Servicio de tasks a mostrar
    this.proyectService.getAllTask(0)
        .then(response => {
          this.tasks= response.data;
        })
    //Servicio de Comments a mostrar
    this.proyectService.getAllComments(0)
        .then(response =>{
          this.comments= response.data;
        })
    this.initFilters();


  },
  methods:{
    initFilters(){
      this.filters={global: {value:null,matchMode:FilterMatchMode.CONTAINS}};
    }

  }
}

</script>

<template>

  <div class=" flex ml-2 sm:text-3xl">
    <h1>{{proyect.name}}</h1>
  </div>

  <div class="grid">
    <div class="col">
      <div class="grip">
        <div class="col">

          <div class="DivHome">
            <h2>Assigned Tasks</h2>
            <div class="xl:grid sm:flex">
              <div class="xl:col-4 sm:flex-column" v-for="task in tasks" :key="task.id">
                <div class="card1">
                  <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
                  <h3>{{task.name}}</h3>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div class="col">

          <div class="DivHome">
            <h2>Files</h2>
            <div class="xl:grid sm:flex">
              <div class="xl:col-4 sm:flex-column" v-for="file in files" :key="file.id">
                <div class="card1" >
                  <h3>{{file.name}}</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="col">
      <div class="DivHome">
        <h2>Comments</h2>
        <div class="flex flex-column ">
          <div class="card1" v-for="comment in comments" :key="comment.id">
            <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
            <h3>{{comment.content}}</h3>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.DivHome {
  background-color: #c2ceff;
  border-radius: 16px;
  padding: 15px;
  margin: 10px;
  overflow: auto;

}
.card{
  display:flex;
  border-radius:16px;
  align-items:center;
  padding:5px;
  background-color: white;


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


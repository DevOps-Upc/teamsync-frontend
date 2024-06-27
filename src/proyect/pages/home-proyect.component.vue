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
     let projectId = Number(this.$route.params.id);
    //Servico de Proyecto q selecciono (Uso el 0 proyect)
    this.proyectService = new ProyectApiService();
    this.proyectService.getProject(projectId)
        .then(response =>{
          this.proyect =response.data;
          console.log("datos")
          console.log(this.proyect)
        })

    //Servicio de Files a mostrar
    this.proyectService.getAllFiles(projectId)
        .then(response =>{
          this.files =response.data;
        })

    //Servicio de tasks a mostrar
    this.proyectService.getAllTask(projectId)
        .then(response => {
          this.tasks= response.data;
        })
    //Servicio de Comments a mostrar
    this.proyectService.getAllComments(projectId)
        .then(response =>{
          this.comments= response.data;
          console.log("Comentarios")
          console.log(this.comments)
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

          <div class="p-2 m-2 border-round-xl mt-5 " id="HomeDiv">

            <h2>Assigned Tasks</h2>

            <div class="grid overflow-auto xl: h-13rem " >
              <div class="xl:col-12 md:col-12 sm:col-12"  v-for="task in tasks" :key="task.id" >
                <div class="card1">
                  <div>
                    <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
                    <h3>{{task.name}}</h3>
                  </div>

                </div>
              </div>
            </div>
          </div>



        </div>
        <div class="col">
          <div class="p-2 m-2 border-round-xl mt-5 " id="HomeDiv">

            <h2>Assigned Tasks</h2>

            <div class="grid overflow-auto xl: h-13rem " >
              <div class="xl:col-6 md:col-12 sm:col-12"  v-for="file in files" :key="file.id" >
                <div class="card1">
                  <div>
                    <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
                    <h3>{{file.name}}</h3>
                  </div>
                  <pv-button text>
                    <i class="pi pi-file" style="font-size:2rem; color:black;"></i>
                  </pv-button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="col pt-5">
      <div class="DivHome">
        <h2>Comments</h2>
        <div class="flex flex-column ">
          <div class="card1" v-for="comment in comments" :key="comment.id">
            <div>
              <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
              <h3>{{comment.content}}</h3>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
#HomeDiv{
  background-color: #c2ceff;
}

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
  justify-content: space-between;

  border-radius:16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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


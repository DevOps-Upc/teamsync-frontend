<script>
import {ProyectApiService} from "../services/proyect-api.service.js";

export default {
  name: "members-proyect.component",
  title: "toolBarStudent",
  components:{},
  data(){
    return{
      integratesOfProyect:[]

    }

  },
  created() {
    this.proyectService = new ProyectApiService();

    this.proyectService.getAllIntegrate(0).then(
        response => {
          this.integratesOfProyect = response.data
          console.log(this.integratesOfProyect)

        }
    )
  },
  methods(){

  }
}


</script>

<template>
  <div class="flex ml-2 sm:text-3xl">
    <h1>Project Members</h1>
  </div>

  <div class="p-2 m-2 border-round-xl" >

    <div class="grid overflow-auto xl: h-13rem " >
      <div class="xl:col-4 md:col-6 sm:col-12"  v-for="integrate in integratesOfProyect" :key="integrate.id" >
        <div class="card1">
          <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
          <h3>{{integrate.name}}</h3>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.card1{
  display:flex;


  border-radius:16px;

  align-items:flex-start;
  padding:5px;
  background-color: #C2CEFF;
  margin: 10px;

  >img{
    height:51px;
    width:51px;
    border-radius:50%;
    margin-right: 10px;
  }
}

</style>
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
          <div>
            <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
            <h3>{{integrate.name}}</h3>
          </div>
          <pv-button text>
            <i class="pi pi-trash"  id="buttonMembers"></i>
          </pv-button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex p-2 m-3">
    <pv-button label="Invite" style="background-color: #058339;"/>
  </div>




</template>

<style scoped>
#buttonMembers {
  font-size:2rem;
  color:black;

 }
.card1{
  display:flex;
  justify-content: space-between;


  border-radius:16px;


  padding:5px;
  background-color: #C2CEFF;
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

</style>
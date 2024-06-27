<script>
import {ProyectApiService} from "../services/proyect-api.service.js";
import ProjectMembersAddOrEdit from "../components/project-members-add-or-edit.component.vue";




export default {
  name: "members-proyect.component",
  title: "toolBarStudent",
  components:{ProjectMembersAddOrEdit},
  data(){
    return{
      integratesOfProyect:[],
      integrate:{},
      submitted:false,
      integrateDialog:false

    }

  },
  created() {
    let projectId = Number(this.$route.params.id);
    this.proyectService = new ProyectApiService();

    this.proyectService.getAllIntegrate(projectId).then(
        response => {
          this.integratesOfProyect = response.data
          console.log(this.integratesOfProyect)

        }
    )
  },
  methods:{
    openDialog(){
      this.integrate={};
      this.submitted=false;
      this.integrateDialog=true;
    },
    onAddOrUpdateIntegrateCancel(){
      this.integrateDialog=false;
      this.submitted=false;

    },
    onSaveIntegrate(){

    }

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
    <pv-button label="Invite" style="background-color: #058339;" @click="openDialog"/>
  </div>

  <project-members-add-or-edit
      :integrate = "integrate"
      v-bind:visible="integrateDialog"
      v-on:cancel="onAddOrUpdateIntegrateCancel"
      v-on:save="onSaveIntegrate"

  />




</template>

<style scoped>
#buttonMembers {
  font-size:2rem;
  color:black;

 }
.card1{
  display:flex;
  justify-content: space-between;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
<script>
import {ProyectApiService} from "../../proyect/services/proyect-api.service.js";


export default {
  name: "home-component",
  title: 'HomePublic',
  components:{},
  data(){
    return{
      proyects:[]

    }

  },
  created() {
    this.proyectService = new ProyectApiService();
    this.proyectService.getAllProjectsByIdUser(0)
        .then(response =>{
          this.proyects=response.data;
        });
    console.log("projectos")

  },
  methods:{

  }
}

</script>

<template>
  <div class="flex ml-2 sm:text-3xl">
    <h1>My Projects</h1>
  </div>

  <div class="p-2 m-2 border-round-xl" >

    <div class="grid xl: h-13rem " >
      <div class="xl:col-3 md:col-6 sm:col-12"  v-for="project in proyects" :key="project.id" >
        <div class="card1">
          <h3>{{project.name}}</h3>
          <router-link :to="{name:'myProject',params:{id:project.id}}">
            <img class="img-card" :src="project.picture" >
          </router-link>

        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>

.card1 {
  display: flex;
  align-items:center;

  justify-content: center;
  flex-direction: column;

  border-radius: 16px;

  padding: 15px;
  background-color:#C2CEFF;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.img-card{
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
  border-radius: 16px;

}

.img-card:hover {
  transform: scale(1.05);
}


</style>
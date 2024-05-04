<script>
import { ExpertsApiService } from "../services/experts-api.service.js";
import ExpertCard from "../components/expert-card.component.vue";
export default {
  name: "experts",
  components: {ExpertCard},
  title: "Experts",
  data(){
    return{
      experts: [],
//      expertsApi: new ExpertsApiService()
    }
  },
  created() {
    this.expertService = new ExpertsApiService();
    this.expertService.getAllExperts()
        .then(response =>{
          this.experts = response.data;
          console.log('data: ');
          console.log(response.data.experts);
        });
  }
}
</script>

<template>
  <div class="flex ml-2 sm:text-3xl">
    <div v-for="expert in experts">
      <expert-card :expert="expert"></expert-card>
    </div>
  </div>

</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container > * {
  flex: 1 0 20%; /* Esto hará que cada card tome el 20% del ancho del contenedor, permitiendo que se muestren 5 por fila */
}
</style>
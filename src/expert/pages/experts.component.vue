<script>
import { ExpertsApiService } from "../services/experts-api.service.js";
import ExpertCard from "../components/expert-card.component.vue";
export default {
  name: "experts",
  components: {ExpertCard},
  title: "Experts",
  data() {
    return {
      experts: [],
      searchQuery: "",
//      expertsApi: new ExpertsApiService()
    }
  },
  computed: {
    filteredExperts() {
      return this.experts.filter(expert =>
          expert.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    this.expertService = new ExpertsApiService();
    this.expertService.getAllExperts()
        .then(response => {
          this.experts = response.data;
          console.log('data: ');
          console.log(response.data.experts);
        });
  }
}
</script>

<template>
  <h1>Profesionales</h1>
  <div class="experts-view">
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Buscar por especialidad...">
      <button><i class="pi pi-search" style="font-size: 2rem"></i>
      </button>
    </div>
    <div class="card-container">
      <div v-for="expert in filteredExperts" :key="expert.id" class="card-item">
        <expert-card :expert="expert"></expert-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experts-view {
  padding: 20px;
  background-color: #e0e7ff; /* Light blue background */
  border-radius: 10px;
}

h1 {
  font-size: 2rem;
  color: #3f51b5; /* Purple color */
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  outline: none;
}

.search-bar button {
  padding: 10px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}

.search-bar button i {
  color: #3f51b5;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card-item {
  flex: 1 1 calc(20% - 16px);
  max-width: calc(20% - 16px);
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .card-item {
    flex: 1 1 calc(25% - 16px);
    max-width: calc(25% - 16px);
  }
}

@media (max-width: 992px) {
  .card-item {
    flex: 1 1 calc(33.33% - 16px);
    max-width: calc(33.33% - 16px);
  }
}

@media (max-width: 768px) {
  .card-item {
    flex: 1 1 calc(50% - 16px);
    max-width: calc(50% - 16px);
  }
}

@media (max-width: 576px) {
  .card-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
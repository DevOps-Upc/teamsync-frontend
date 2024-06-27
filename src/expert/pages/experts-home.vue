<template>
  <div class="expert-home">
    <h1>Solicitudes pendientes</h1>
    <div v-for="request in requests" :key="request.id" class="request-card">
      <h2>{{ request.teamName }}</h2>
      <p>{{ request.message }}</p>
      <button @click="acceptRequest(request.id)">Aceptar</button>
      <button @click="rejectRequest(request.id)">Rechazar</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import axios from "axios";
export default {
  name: 'ExpertHome',
  data() {
    return {
      requests: [],
    };
  },
  methods: {
    async getRequests() {
      const response = await axios.get('http://localhost:3000/requests');
      this.requests = response.data;
    },

    created() {
      this.getRequests();
    },
  },
}
</script>
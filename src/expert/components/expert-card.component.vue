<script>
export default {
  name: 'expert-card',
  props: {
    expert: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<template>
  <pv-card class="expert-card m-5">
    <template #header>
      <img class="expert-image" :alt="expert.name" :src="expert.image">
    </template>
    <template #title>
      <h2 class="expert-name">{{ expert.name }}</h2>
      <h3 class="expert-title">{{ expert.title }}</h3>
    </template>
    <template #content>
      <p class="expert-experience">{{ expert.bio }}</p>
    </template>
    <template #footer>
      <pv-button label="More Info" @click="showDialog = true" />
    </template>
  </pv-card>
  <pv-dialog v-model:visible="showDialog" modal header="Expert Info" :style="{ width: '25rem' }">
    <div class="dialog-content">
      <p><strong>Nick del docente:</strong> {{ expert.name }}</p>
    </div>
    <div class="dialog-footer">
      <pv-button type="button" label="Aceptar" class="accept-button" @click="showDialog = false" />
      <pv-button type="button" label="Rechazar" class="reject-button" @click="showDialog = false" />
    </div>
  </pv-dialog>
</template>

<style scoped>
.expert-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  background-color: #fff;
  padding: 5px;
  text-align: center;
}

.expert-card:hover {
  transform: translateY(-5px);
}

.expert-image {
  width: 100%;
  height: 200px; /* Ajusta la altura según necesites */
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 8px 8px 0 0; /* Esquinas redondeadas en la parte superior */
}

.expert-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0 5px;
  color: #333;
}

.expert-title {
  font-size: 1.2rem;
  font-weight: normal;
  margin: 5px 0;
  color: #666;
}

.expert-bio {
  font-size: 1rem;
  color: #555;
  margin: 15px 0;
  text-align: justify;
}

.expert-experience {
  font-size: 1rem;
  color: #777;
  margin: 10px 0;
}

.dialog-content {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

.dialog-footer {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.accept-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.reject-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
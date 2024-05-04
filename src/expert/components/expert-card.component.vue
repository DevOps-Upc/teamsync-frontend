<script>
import {Expert} from "../model/expert.entity.js";
export default {
  name: "expert-card",
  props: {
    expert: Expert,
  }
}
</script>

<template>
  <pv-card class="m-5">
    <template #header>
      <img class="expert-image" :alt="expert.name"
           :src="expert.image">
    </template>
    <template #title>
      <p>{{ expert.name }}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
        {{expert.bio}}
      </p>
    </template>
    <template #footer>
      <a :href="expert.link" target="_blank">Professional Profile</a>
    </template>
  </pv-card>
</template>

<style scoped>
.expert-image {
  width: 200px;
  height: 200px;
  object-fit: cover; /* Esto asegura que la imagen se redimensione correctamente */
}
</style>
<script>
export default {
  name: "app",
  title: "TeamSync",

  data() {
    return {
      drawer: false,
      items: [
        {label: 'INICIO', to: '/home'},
        {label: 'NOSOTROS', to: '/about'},
        {label: 'BIBLIOTECA', to: '/library'},
        {label: 'PROFESORES', to: '/professionals'},
        {label: 'PERFIL', to: '/profile'},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },

  }
}
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="bg-primary" fixed>
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer()"></pv-button>
        <h3>TeamSync</h3>

        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"></pv-sidebar>
  <router-view></router-view>
</template>

<style scoped>
</style>
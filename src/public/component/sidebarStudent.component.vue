<script>
import {ProyectApiService} from "../../proyect/services/proyect-api.service.js";

export default {
  name: "sidebar-Student-component",
  components:{},
  data(){
    return{
      items:[
        {icon:"pi pi-home", to:'/home'},
        {icon:"pi pi-briefcase", to:'/experts'},
        {icon:"pi pi-book", to:'/library'},
        {icon:"pi pi-bell", to:'/notifications'},
        {icon:"pi pi-sign-out", to:'/logout'}
      ]
    }
  },
  created() {

  },
  methods:{

  }
}

</script>

<template>
  <div class="sidenav-header">
    <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396100117907/star-guardian-kaisa-icon.png">
    <div class="header-text">
      <h4>Nombre</h4>
      <p>Rol</p>
    </div>
      <router-link v-for="item in items" v-slot="{navigate,href}" :key="item.icon" :to="item.to">
        <pv-button text :href="href" @click="navigate" >
          <i :class="item.icon" id="icon" ></i>
        </pv-button>
      </router-link>
  </div>

</template>

<style scoped>
.sidenav-header{
  padding-top:70px ;
  text-align: center;
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background-color: #6161FF;
  height: 100vh;

  > img {
    border-radius: 100%;
    object-fit: cover;
    height: 70px;
    width: 70px;
    transition: transform 0.3s ease;

  }
  >img:hover{
    transform: scale(1.05);
  }
  .header-text{
    >h4{
      margin: 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    >p{
      margin: 0 ;
      font-size: 0.8rem;
    }
  }
}
#icon{
  font-size:2rem;
  color:black;
  transition: transform 0.3s ease;

}
#icon:hover{
  transform: scale(1.05);
}

</style>
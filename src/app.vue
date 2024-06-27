<script>
import ToolbarComponent from "./public/component/toolbarStudent.component.vue";
import SidebarStudentComponent from "./public/component/sidebarStudent.component.vue";
export default {
  name: 'app',
  title: 'DevSoft TeamSync',
  components: {SidebarStudentComponent, ToolbarComponent},
  data(){
    return {
      user: null,
    }
  },
  methods: {
    login(user){
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.$router.push('/home')
    },
    logout(){
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  created(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user == null) {
      //Descomentar esto antes de desplegar
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-1"  style="height: 100vh;" v-if="user">
      <sidebarStudentComponent/>
    </div>
    <div class="col-11" style="height: 100vh;">
      <routerView @login="login" @logout="logout"/>
    </div>
  </div>
</template>

<style scoped>

</style>

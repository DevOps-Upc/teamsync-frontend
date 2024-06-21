<script>
import loginService from '../services/login.service';
export default {
  name: 'login-card',
  data() {
    return {
      username: '',
      password: '',
      invalid: false,
      loading: false,
      user: null,
    }
  },
  methods: {
    register() {
      this.$router.push('/register');
    },
    async login(){
      this.invalid = false;
      this.user = await loginService(this.username, this.password)
      if(this.user){
        this.$emit('login', this.user);
      } else {
        this.invalid = true;
      }
    }
  }
}
</script>

<template>
  <div class="centered-container">
    <pv-card class="main-card" style="background-color: #C2CEFF;">
      <template #title>
        <span class="paragraph font-bold" style="color: #3B2AD8; font-size: 40px"> Login</span>
      </template>
      <template #content>
        <div class="login-form">
          <pv-input-text type="text" id="Username" v-model="username" :invalid="invalid" placeholder="Ingrese su usuario"/>
          <pv-input-text type="password" id="password" v-model="password" :invalid="invalid" placeholder="Ingrese su contraseña"/>
          <small v-if="invalid">La cuenta que ha ingresado no existe</small>
          <pv-button label="Iniciar Sesión" @click="login" icon="pi pi-sign-in" :disabled="loading" style="display:flex;"/>
          <div class="paragraph" @click="forgot-password"> ¿Olvidaste tu contraseña? </div>
          <div class="paragraph" @click="register"> Registrate </div>
        </div>
      </template>
    </pv-card>
  </div>

</template>

<style>
  .centered-container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
  }
  .main-card{
    border-radius: 4rem;
    padding: 3rem 2rem;
    width: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
</style>
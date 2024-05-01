<script>
export default {
  name: 'login-card',
  data() {
    return {
      nick: '',
      password: '',
      submitted: false,
      loading: false
    }
  }
}
</script>

<template>
  <br /><br />
  <div class="centered-container">
    <pv-card class="p-fluid" style=" width: 500px; height: 500px; background-color: #C2CEFF; padding: 20px; border-radius: 20px; font-family: 'Montserrat', sans-serif">
      <template #title>
        <span class="paragraph font-bold" style="color: #3B2AD8; font-size: 40px"> Login </span>
      </template>
      <template #content>
        <div class="field paragraph mt-3">
          <span class="p-input-icon-left p-float-label">
            <pv-input-text
                type="text"
                id="Nick"
                v-model.trim="nick"
                required="true"
                autofocus
                :class="{ 'p-invalid': submitted && !nick }"
                :placeholder="('Ingrese su nick')"
            />
            <label for="email" style="color: #4536F5;"> <i class="pi pi-envelope"></i> Nick</label>
          </span>
        </div>

        <div class="field paragraph mt-3">
          <span class="p-input-icon-left p-float-label">

            <pv-input-text

                type="password"
                id="password"
                v-model.trim="password"
                required="true"
                autofocus
                :class="{ 'p-invalid': submitted && !password }"
                :placeholder="('Ingrese su password')"
            />
            <label for="password" style="color: #4536F5;"> <i class="pi pi-lock"></i> Password </label>

          </span>
        </div>
        <br />

        <div class="card flex justify-content-center">
          <pv-button :label="('Login')" style="background-color: #3B2AD8; width:30%; border-radius: 15px" @click="login"  icon="pi pi-sign-in" :disabled="loading" />
        </div>
        <br/>
        <br/>
        <span class="paragraph"> Forgot Password </span>
        <br/>
        <br/>
        <span class="paragraph"> Do not have an account? Sign Up </span>

      </template>
    </pv-card>
  </div>

</template>

<style>
    .centered-container {
      text-align: center;
      display: flex; /* Usa Flexbox */
      justify-content: center; /* Centra horizontalmente */
      align-items: center; /* Centra verticalmente */
      padding-top: 5%;
      font-family: 'Montserrat', sans-serif;
    }
</style>
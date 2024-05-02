<script>
export default {
  name: 'register-card',
  data() {
    return {
      name: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email:'',
      nick:'',
      rol:'',
      submitted: false,
      loading: false
    }
  },
  methods: {
    registrarse() {
      this.showlogin=true;
      // Redirige a la ruta '/otro-componente'
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <div class="centered-container">
    <pv-card class="p-fluid" style="width: 500px ;height: 500px;padding: 20px; font-family: 'Montserrat', sans-serif; display: flex; flex-direction: column; align-items: center;">
      <template #title>
        <span class="paragraph font-bold" style="color: #3B2AD8; font-size: 40px"> Register </span>
      </template>
      <template #content >
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <span class="p-input-icon-left p-float-label">
              <pv-input-text
                  type="text"
                  id="name"
                  v-model.trim="name"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !name }"
                  :placeholder="('Ingrese su name')"
              />
              <label for="email" style="color: #4536F5;"> Name</label>
            </span>
          </div>

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <span class="p-input-icon-left p-float-label">
              <pv-input-text
                  type="text"
                  id="lastName"
                  v-model.trim="lastName"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !lastName }"
                  :placeholder="('Ingrese su Last Name')"
              />
              <label for="email" style="color: #4536F5;"> Last Name</label>
            </span>
          </div>

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
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

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <span class="p-input-icon-left p-float-label">

              <pv-input-text

                  type="password"
                  id="confirmPassword"
                  v-model.trim="confirmPassword"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !confirmPassword }"
                  :placeholder="('Ingrese su confirm password')"
              />
              <label for="password" style="color: #4536F5;"> <i class="pi pi-lock"></i> Confirm Password </label>

            </span>
          </div>

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <span class="p-input-icon-left p-float-label">
              <pv-input-text
                  type="text"
                  id="email"
                  v-model.trim="email"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !email }"
                  :placeholder="('Ingrese su email')"
              />
              <label for="email" style="color: #4536F5;"> <i class="pi pi-envelope"></i> Email </label>
            </span>
          </div>

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
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
              <label for="nick" style="color: #4536F5;"> Nick </label>
            </span>
          </div>

          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <span class="p-input-icon-left p-float-label">
              <pv-input-text
                  type="text"
                  id="rol"
                  v-model.trim="rol"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !rol }"
                  :placeholder="('Ingrese su rol')"
              />
              <label for="rol" style="color: #4536F5;"> Rol </label>
            </span>
          </div>

          <br />
          <div class="field paragraph mt-3" style="width: calc(50% - 3%);">
            <pv-button :label="('Sign Up')" style="background-color: #3B2AD8; border-radius: 15px" @click="registrarse"  icon="pi pi-user-plus"/>
          </div>
        </div>

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
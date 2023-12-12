<template>
  <v-form v-model="valido" ref="formulario" lazy-validation>
    <v-text-field
     label="Email"
     v-model="email"
     :rules="reglasEmail"
     required
    ></v-text-field>
    <v-text-field
     label="Contraseña"
     v-model="contrasenha"
     type="password"
     required
    ></v-text-field>
    <v-btn
     @click="entrar"
     :disabled="!valido"
    >Entrar</v-btn>
    <v-btn @click="limpar">Limpiar</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    email: '',
    contrasenha: '',
    reglasEmail: [
      v => !!v || 'Email requerido',
      v => /\S+@\S+\.\S+/.test(v) || 'Email debe ser válido',
    ],
  }),
  methods: {
    async entrar() {
      return axios({
        method: 'post',
        data: {
          email: this.email,
          contrasenha: this.contrasenha,
        },
        url: 'http://localhost:8081/usuarios/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          window.localStorage.setItem('auth', respuesta.data.token);
          this.$swal('Ma-ra-vi-llo-so!', 'Está listo para iniciar', 'success');
          this.$router.push({ name: 'Inicio' });
        })
        .catch((error) => {
          const mensaje = error.respuesta.data.mensaje;
          this.$swal('Oh no!', `${mensaje}`, 'error');
          this.$router.push({ name: 'Login' });
        });
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>

<template>
    <v-form v-model="valido" ref="formulario" lazy-validation>
        <v-text-field
            label="Película:"
            v-model="nombre"
            :rules="reglasNombre"
            required
        ></v-text-field>
        <v-text-field
            label="Sinopsis:"
            v-model="sinopsis"
            multi-line
        ></v-text-field>
        <v-select
            label="Año de publicación:"
            v-model="anhopub"
            required
            :rules="reglasPublicacion"
            :items="anhos"
        ></v-select>
        <v-text-field
            label="Género:"
            v-model="genero"
            required
            :rules="reglasGenero"
        ></v-text-field>
        <v-btn
            @click="guardar"
            :disabled="!valido"
        >Guardar</v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
</template>


<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    nombre: '',
    sinopsis: '',
    genero: '',
    anhopub: '',
    reglasNombre: [
      v => !!v || 'La película es requerida',
    ],
    reglasGenero: [
      v => !!v || 'Género de película requerido',
      v => (v && v.length <= 80) || 'Género debe ser menor o igual a 80 caracteres',
    ],
    reglasPublicacion: [
      v => !!v || 'Año de publicación es requerido',
    ],
    select: null,
    anhos: [
      '2016',
      '1967',
      '2001',
      '1958',
      '1959',
      '2018',
    ],
  }),

  methods: {
    guardar() {
      if (this.$refs.formulario.validate()) {
        // Realizar siguiente acción
        return axios({
          method: 'post',
          data: {
            nombre: this.nombre,
            sinopsis: this.sinopsis,
            anhopub: this.anhopub,
            genero: this.genero,
          },
          url: 'http://localhost:8081/peliculas',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            this.$swal(
              '¡Grandioso!',
              'Película guardada satisfactoriamente',
              'success',
            );
            this.$router.push({ name: 'Inicio' });
            this.$refs.formulario.reset();
          })
          .catch(() => {
            this.$swal(
              '¡¡Oh no!!',
              'Ocurrió un error y no pudimos agregar la película',
              'error',
            );
          });
      }

      return true;
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>

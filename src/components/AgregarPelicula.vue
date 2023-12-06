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
            :items="anhos"
        ></v-select>
        <v-text-field
            label="Género:"
            v-model="genero"
        ></v-text-field>
        <v-btn
            @click="guardar"
            :disabled="!valido"
        >Guardar</v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
</template>


<script>
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
      }
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>

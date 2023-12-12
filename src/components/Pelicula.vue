<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ pelicula.nombre }}</div>
            <span class="grey--text">
              {{ pelicula.anhopub }} &middot; {{ pelicula.genero }}
            </span>
          </div>
        </v-card-title>
        <h6 class="card-title" v-if="current_user"
          @click="calificar">Calificar esta película</h6>
        <!-- <h6 class="card-title" @click="calificar">Calificar esta película</h6> -->
        <v-card-text>
          {{ pelicula.sinopsis }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';

const wrapper = document.createElement('div');
// estado compartido
const estado = {
  nota: 0,
};
// crear componente en contenido
const ComponenteCalif = Vue.extend({
  data() {
    return {
      calif: 0,
    };
  },
  watch: {
    calif(nuevoValor) {
      estado.nota = nuevoValor;
    },
  },
  template: `
    <div class="rating">
      ¿Cuál fue su expriencia viendo esta película?
      <star-rating v-model="calif" :show-rating="false"></star-rating>
    </div>   
  `,
  components: {
    'star-rating': StarRating,
  },
});

const componente = new ComponenteCalif().$mount(wrapper);

export default {
  name: 'Pelicula',
  data() {
    return {
      pelicula: [],
    };
  },
  mounted() {
    this.obtenerPelicula();
  },
  methods: {
    async calificar() {
      this.$swal({
        content: componente.$el,
        buttons: {
          confirm: {
            value: 0,
          },
        },
      })
        .then(() => {
          const peliculaId = this.$route.params.id;
          return axios({
            method: 'post',
            data: {
              calif: estado.nota,
            },
            url: `http://localhost:8081/peliculas/calif/${peliculaId}`,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(() => {
              this.$swal(`¡Gracias por calificar! ${estado.nota}`, 'success');
            })
            .catch((error) => {
              const mensaje = error.respuesta.data.message;
              this.$swal('Oh no puede ser!', `${mensaje}`, 'error');
            });
        });
    },
    async obtenerPelicula() {
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/peliculas/${this.route.params.id}`,
      })
        .then((respuesta) => {
          this.pelicula = respuesta.data;
        })
        .catch(() => {

        });
    },
  },
};
</script>

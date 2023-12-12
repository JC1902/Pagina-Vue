<!-- <template>
  <v-layout row wrap>
    <v-flex xs12>
      <div>{{ mensaje }}</div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="responder">Responder</v-btn>
    </v-flex>
  </v-layout>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      mensaje: 'Hola, ¿Cómo  te va hoy?',
    };
  },
  methods: {
    responder() {
      this.mensaje = 'Me va muy bien, Gracias!';
    },
  },
};
</script> -->
<!-- <template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="gery-text">2016 &middot; Ciencia Ficción / Acción &middot; 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Batman v Superman: Dawn of Justice (titulada Batman v Superman:
          El amanecer de la justicia en España y Batman vs Superman: El origen
          de la justicia en Hispanoamérica) es una película estadounidense de superhéroes
          estrenada en 2016. Es la segunda entrega del Universo Extendido de DC (DCEU) y
          una secuela de Man of Steel (2013), además de la primera película de acción real
          que presenta a Batman y Superman juntos.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">La naranja mecánica</div>
            <span class="gery-text">1967 &middot; Drama / Acción &middot; 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Amélie</div>
            <span class="gery-text">2001 &middot; Comedia &middot; 2h 2m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Vértigo (De entre los muertos)</div>
            <span class="gery-text">1958 &middot; Supenso &middot; 2h 8m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Batman v Superman: Dawn of Justice (titulada Batman v Superman:
          El amanecer de la justicia en España y Batman vs Superman: El origen
          de la justicia en Hispanoamérica) es una película estadounidense de superhéroes
          estrenada en 2016. Es la segunda entrega del Universo Extendido de DC (DCEU) y
          una secuela de Man of Steel (2013), además de la primera película de acción real
          que presenta a Batman y Superman juntos.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Con la muerte en los talones</div>
            <span class="gery-text">1959 &middot; Suspenso &middot; 2h 16m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Cafarnaúm</div>
            <span class="gery-text">2018 &middot; Suspenso &middot; 2h 2m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Alex es un joven muy agresivo que tiene dos pasiones:
          la violencia desaforada y Beethoven. Es el jefe de la
          banda de los drugos, que dan rienda suelta a sus instintos
          más salvajes aterrorizando a la población.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template> -->

<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="pelicula in peliculas" :key="pelicula._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn v-bind:to="`/peliculas/${pelicula._id}`">
                {{ pelicula.nombre }}
              </v-btn>
            </div>
            <span class="gray--text">{{ pelicula.anhopub }} &middot; {{ pelicula.genero }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ pelicula.sinopsis }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple">Calificar esta película</v-btn>
          <v-btn @click="eliminarPelicula(pelicula._id)" text color="red">Borrar</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-btn @click="eliminarPeliculas()" text color="red">Borrar todo</v-btn>
  </v-layout>
</template>

<script>
import axios from 'axios';
import '../assets/stylesheets/main.css';

export default {
  name: 'Peliculas',
  data() {
    return {
      peliculas: [],
    };
  },
  mounted() {
    this.obtenerPeliculas();
  },
  methods: {
    async obtenerPeliculas() {
      const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: 'http://localhost:8081/peliculas',
        headers: {
          Authorization: `JWT ${token}`,
          'Çontent-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.peliculas = respuesta.data.peliculas;
          this.current_user = respuesta.data.current_user;
        })
        .catch(() => {
        });
    },
    async eliminarPelicula(_id) {
      return axios({
        method: 'delete',
        url: `http://localhost:8081/peliculas/${_id}`,
      })
        .then(() => {
          this.obtenerPeliculas();
        })
        .catch(() => {

        });
    },
    async eliminarPeliculas() {
      return axios({
        method: 'delete',
        url: 'http://localhost:8081/peliculas',
      })
        .then(() => {
          this.obtenerPeliculas();
        });
    },
  },
};
</script>

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
<template>
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
</template>

<script>
import '../assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

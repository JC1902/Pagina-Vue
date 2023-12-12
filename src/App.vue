<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
        <router-link v-bind:to="{name: 'Inicio'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>Inicio</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Contacto'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contacto</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Registro'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>

            </v-list-item-action>
          </v-list-item>
        </router-link>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo" dark fixes app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>{{drawer ? 'close' : 'menu'}}</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>Inicio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-bind:to="{name: 'AgregarPelicula'}">Agregar Película</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2023</span>
    </v-footer>

  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

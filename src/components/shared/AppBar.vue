<template>
 <div class="app-bar">
    <v-app-bar
      app 
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Carnaval</v-toolbar-title>
      <v-spacer></v-spacer><span class="text-right mr-6"><ThemeChanger /></span>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/escolas-de-samba">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Escolas de Samba</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/about">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/escola-de-samba">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>samba!!!</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import ThemeChanger from '@/components/shared/ThemeChanger.vue'
  export default {
    name: 'AppBar',
    components: {
    ThemeChanger,
  },
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
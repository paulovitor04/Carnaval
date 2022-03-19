<template>
  <v-app>    
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/shared/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
</style>

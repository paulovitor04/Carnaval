<template>
  <v-tooltip v-if="!$vuetify.theme.dark" left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon>mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Lights Off</span>
      </v-tooltip>

      <v-tooltip v-else left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="transparent" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Lights On</span>
      </v-tooltip>
</template>


<script>
export default {
  name: 'ThemeChanger',
  data: () => ({
      //
  }),
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>
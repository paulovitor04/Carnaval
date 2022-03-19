<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Escolas de Samba</h2>

    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            Escolas de Samba
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="escola of listaEscolas" :key="escola.name">
          <td>{{ escola.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </v-container>
</template>

<script>
export default {
  name: 'ListaEscolas',
  data() {
    return {
      listaEscolas: []
    }
  },
  created() {
    fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
      .then(res => res.json())
      .then(json => {
        this.listaEscolas = json;
    });
  }
}
</script>

<style scoped>

</style>
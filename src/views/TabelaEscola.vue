<template>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Escola</th>
          <th class="text-right">Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(escola, index) of listaEscolas" :key="escola.id">
          <td class="nao">{{ index + 1 }}</td>          
          <td> 

            <router-link to="/escola-de-samba">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ escola.name }}</v-list-item-title>
          </v-list-item>
          </router-link>

          </td>
          <td class="text-right"> {{ escola.address }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  
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
.nao {
    display: none;
}

a {
  text-decoration: none;
}

</style>
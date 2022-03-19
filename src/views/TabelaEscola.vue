<template>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Escola de Samba:</th>
        </tr>
      </thead>
      <tbody>
        <tr>       
          <td>
            <router-link to="/mudanca-do-garcia">
              {{ listaEscolas[0].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[0].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/ile-aiye">
              {{ listaEscolas[1].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[1].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/filhos-de-ghandy">
              {{ listaEscolas[2].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[2].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/bloco-do-minhocao">
              {{ listaEscolas[3].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[0].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/galo-da-madrugada">
              {{ listaEscolas[4].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[4].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/homem-da-meia-noite">
              {{ listaEscolas[5].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[5].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/Eu-acho-e-pouco">
              {{ listaEscolas[6].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[6].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/cordao-bola-preta">
              {{ listaEscolas[7].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[7].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/banda-de-ipanema">
              {{ listaEscolas[8].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[8].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/suvaco-de-cristo">
              {{ listaEscolas[9].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[9].address }}</td>
        </tr>

        <tr>       
          <td>
            <router-link to="/sargento-pimenta">
              {{ listaEscolas[10].name }}
            </router-link>
          </td>
          <td class="text-right"> {{ listaEscolas[10].address }}</td>
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
a {
  text-decoration: none;
}

</style>
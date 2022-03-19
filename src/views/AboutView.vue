<template>
  <v-container>
    <div>
        <h2>Projeto</h2>
          <p>
             Como desafio para o projeto Decola, desenvolvemos essa aplicação que visa aproximar o público das escolas de samba, setor prejudicado durante a pandemia que vivemos. <br>
             A ideia dela é ser um canal de comunicação e divulgação.
          </p>
    </div>
    <div>
        <h2>Contatos</h2>
      <h3> Angela Alves </h3>
        <p> 
          <a href="https://www.linkedin.com/in/angelavbalves/" target="_blank"> Linkedin</a> <br>
          <a href="https://github.com/angelavbalves">GitHub</a>
        </p>
      <h3>Marcelo Klein</h3>
        <p>
          <a href="https://www.linkedin.com/in/marelso/" target="_blank"> Linkedin </a> <br>
          <a href="github.com/marelso">GitHub</a>
        </p>
      <h3>Paulo Vitor </h3>
      <p>
          <a href=" https://www.linkedin.com/in/paulo-vitor-de-oliveira-bb257413a/ " target="_blank"> Linkedin </a> <br>
          <a href="https://github.com/paulovitor04">GitHub</a>
        </p>
        <h3>Ted Martins</h3>
        <p>
          <a href="https://www.linkedin.com/in/tedmartins/" target="_blank"> Linkedin </a> <br>
          <a href="https://github.com/TedMartins">GitHub</a>
        </p>
    </div>    
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
a {
  text-decoration: none;
}
</style>
<template>
<div>
  <div class="home">
    <img src="https://images.pexels.com/photos/268481/pexels-photo-268481.jpeg?cs=srgb&dl=pexels-pixabay-268481.jpg&fm=jpg">
    <p>Mais um ano se passou e não conseguimos estar juntinhos na rua do jeito que a gente gosta, mas isso não quer dizer que 
      você precisa abandonar sua (ou suas) escola de samba favorita.  Nosso web-site serve para te deixar perto daquilo que 
      você ama, sem sair de casa. Acompanhe nossos ensaios e também nossas futuras apresentações que estão voltando.  
      Não esqueça de deixar seu comentário, é muito importante para nós.</p>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //
  }
}
</script>

<style scoped>
.home img {
  margin: 25px;
  width: 50%;
  height: 50%;
  border-radius: 5px;
  box-shadow: 5px 5px 3px rgba(0,0,0,0.5);
  }

 div {
   text-align: center;
 } 

 p {
   text-align: justify;
   margin: 15px 50px;
 }
</style>

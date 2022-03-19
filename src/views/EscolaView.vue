<template>
    <div id="body">
        <h2 class="titulos"> 
            <tbody>
                <h1>{{ listaEscolas[0].name }}</h1>
            </tbody>          
        </h2>
        <img src="https://www.correio24horas.com.br/fileadmin/_processed_/2/d/csm_faixa_carnaval_de1dfb906e.jpg" width="35%">  
    <div class="conteudo">
        <h2 class="titulos"> História </h2>        
            <p class="informacoes" >
                {{listaEscolas[0].description}}
            </p>
        <h2 class="titulos"> Eventos </h2>
            <p class="informacoes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur exercitationem recusandae ad, at atque soluta dicta alias voluptates ex ullam et odit vero perferendis illum quidem fugiat corporis autem!
            </p>
         <h2 class="titulos"> Vocês por aqui </h2>
             <p class="informacoes">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias unde nisi quisquam doloribus perspiciatis, molestiae est nostrum reprehenderit explicabo earum dolores cumque ratione quo, aliquid incidunt quas sapiente provident!
             </p>        
    </div>        
    </div>
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
 @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Titillium+Web&display=swap');
#body {
    margin: 30px;
}
h1 {
    font-size: 25pt;
}
.titulos {
   font-family: 'Titillium Web', sans-serif;
   color: blueviolet;
}
.conteudo {
    margin-top: 0px;
    margin-left: 20px;
    text-align: justify;
}
.informacoes {
    margin: 10px;
}
</style>
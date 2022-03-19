<template>
    <div id="body">
        <h2 class="titulos"> 
            <tbody>
                <h1>{{ listaEscolas[2].name }}</h1>
            </tbody>          
        </h2>
        <img :src="listaEscolas[2].photo" width="35%">  
    <div class="conteudo">
        <h2 class="titulos"> História </h2>        
            <p class="informacoes" >
                {{listaEscolas[2].description}}
            </p>
        <h2 class="titulos"> Próximas datas </h2>
            <p class="informacoes">
               <ul>
                   <li>
                     <strong>Próximos ensaios: </strong> <br> 19/04 <br> 19/05 <br> 19/06
                   </li>
                   <li>
                     <strong>Próximas apresentações:</strong> <br> 25/07 <br> 25/08 <br> 25/09 
                   </li>
               </ul>
               
                
            </p>
            <h2 class="titulos"> Vocês por aqui </h2>
         <div class="comentarios">
            <div class="usuario">
                <div class="foto">
                    <figure>
                    <img src="https://home.centraldocarnaval.com.br/midia/arquivo01Blocos/183e72cd1134762a7325f528fee96ac5.jpg">
                    </figure>
                </div>
                <div class="comentario">                
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias unde nisi quisquam doloribus perspiciatis, molestiae est nostrum reprehenderit explicabo earum dolores cumque ratione quo, aliquid incidunt quas sapiente provident!             
                </div>
            </div>      
        </div>
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
.comentario {
    width: 90%;
}  
.usuario {
    padding: rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.foto figure {
    width: 10%;
}
.foto img {
    border-radius: 50%;
    width: 50px;
}
.comentario {
    width: 90%;
}
</style>
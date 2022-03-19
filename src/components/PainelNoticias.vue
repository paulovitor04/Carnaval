<template>
  <div class="pnNoticias">
    <v-carousel class="teste">
        <h1 class="pnNoticiasTitulo">Notícias e campanhas</h1>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
            reverse-transition="fade-transition" transition="fade-transition"
            @click="VisitLink(i)">
        </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            link: 'https://www1.folha.uol.com.br/cotidiano/2022/03/sem-patrocinio-carnaval-de-rua-em-abril-continua-cancelado-em-sao-paulo.shtml',
            src: 'https://f.i.uol.com.br/fotografia/2022/02/26/1645908563621a925381dc4_1645908563_3x2_lg.jpg',
          },
          {
            link: 'https://www.metropoles.com/colunas/guilherme-amado/saude-do-rio-avalia-que-carnaval-de-rua-em-abril-nao-representa-risco',
            src: 'https://uploads.metropoles.com/wp-content/uploads/2022/02/25202406/riotuer1-600x400.jpg',
          },
          {
            link: 'https://www.metropoles.com/colunas/guilherme-amado/representantes-de-blocos-de-rua-se-reunirao-com-eduardo-paes',
            src: 'https://uploads.metropoles.com/wp-content/uploads/2022/03/16190021/WhatsApp-Image-2022-03-16-at-19.00.05-600x400.jpeg',
          },
          {
            link: 'https://extra.globo.com/noticias/carnaval/carnaval-2022-veja-programacao-dos-ensaios-tecnicos-neste-fim-de-semana-25439823.html',
            src: 'https://extra.globo.com/incoming/25439864-341-f52/w640h360-PROP/98069105_ri-rio-de-janeiro-rj-13-03-2022-carnaval-2022ensaios-tecnicos-para-o-desfile-das-esc.jpg',
          },
        ],
      }
    },
    methods: {
        VisitLink(i) {
            window.location.href = this.items[i].link;
        }
    }
  }
</script>

<style scoped>
    .pnNoticias {
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .teste {
        margin: 0 auto;
        width: 50%;
    }
</style>
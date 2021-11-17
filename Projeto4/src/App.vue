<template>
  <div>
    <PlacarPontos :placar="this.placar"/>

    <template v-if="this.pergunta">
      <h1 v-html="this.pergunta"> </h1>

      <template v-for="(pergunta, index) in this.perguntas" :key="index">
        <input type="radio" name="options"
          :disabled=this.resEnviada
          :value=pergunta
          :id=pergunta
          v-model="this.resEscolhida" 
        >

        <label v-html="pergunta" :for=pergunta ></label> <br />

      </template>

      <button class="send" type="button" 
        @click="this.validarPergunta()"
        v-if="!this.resEnviada"
      >
        Enviar
      </button>
    </template>
  </div>
  <section v-if="this.resEnviada">
    <h4 v-if="this.resEscolhida == this.resCerta">
      &#9989; Vc acertou.
    </h4>
    <h4 v-if="this.resEscolhida !== this.resCerta">
      &#10060; Vc errou. a resposta correta era "{{this.resCerta}}"
    </h4>
    <button class="send"
      @click="this.getPerguntas()"
    > Proxima Pergunta</button>
    
    <button class="reset" type="button"
      @click="this.resetPlacar()"
    >
      Resetar Placar
    </button>
  </section>
</template>

<script>
  import PlacarPontos from '@/components/PlacarPontos.vue'


  export default {
    name: 'App',
    components: {
      PlacarPontos
    },
    data() {
      return {
        pergunta: undefined,
        resIncorretas: undefined,
        resCerta: undefined,
        resEscolhida: undefined,
        resEnviada: false,
        placar: [0,0],
      }
    },
    computed : {
      perguntas() {
        let res = JSON.parse(JSON.stringify(this.resIncorretas));
        res.splice(Math.random() * res.length, 0 ,this.resCerta);
        return res;
      }
    },
    methods: {
      validarPergunta() {
        if (this.resEscolhida) {
          this.resEnviada = true
          if (this.resCerta == this.resEscolhida) {
            console.log('a')
            this.placar[0] ++
          } else {
            console.log('b')
            this.placar[1] ++
          }
        }else{
          alert("Escolha uma das opções")
        }
      },
      getPerguntas(){
        this.axios
        .get("https://opentdb.com/api.php?amount=1&category=27&difficulty=easy")
        .then((response) => {
          this.pergunta = response.data.results[0].question
          this.resCerta = response.data.results[0].correct_answer
          this.resIncorretas = response.data.results[0].incorrect_answers
          this.resEnviada = false
          this.resEscolhida = undefined
        })

      },
      resetPlacar() {
        this.getPerguntas()
        this.placar = [0,0]
      }
    },
    created () {
      this.getPerguntas()
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    max-width: 960px;

    input[type=radio]{
      margin: 12px 4px;
    }

    button {
      margin: 12px 16px;
      height:40px;
      max-width: 120px;
      padding: 0 16px;
      cursor: pointer;
      &.send{
        color: #ffffff;
        background-color: #1867c0;
        border: 1px solid #1867c0;
      }
      &.reset {
        color: #ffffff;
        background-color: #3faa14;
        border: 1px solid #3faa14;
      }
    }
  }
</style>

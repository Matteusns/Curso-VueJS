<template>
  <div>

    <template v-if="this.pergunta">
      <h1 v-html="this.pergunta"> </h1>

      <template v-for="(pergunta, index) in this.perguntas" :key="index">
        <input type="radio" name="options"
          :value=pergunta
          :id=pergunta
          v-model="this.resEscolhida" 
        >
        <label v-html="pergunta" :for=pergunta ></label> <br />
      </template>

      <button class="send" type="button">Send</button>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        pergunta: undefined,
        resIncorretas: undefined,
        resCertas: undefined,
        resEscolhida: undefined,
      }
    },
    computed : {
      perguntas() {
        let res = JSON.parse(JSON.stringify(this.resIncorretas));
        res.splice(Math.random() * res.length, 0 ,this.resCertas);
        return res;
      }
    },
    created () {
        this.axios
        .get("https://opentdb.com/api.php?amount=1&category=27&difficulty=easy")
        .then((response) => {
          this.pergunta = response.data.results[0].question
          this.resCertas = response.data.results[0].correct_answer
          this.resIncorretas = response.data.results[0].incorrect_answers
        })
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

    button.send {
      margin-top: 12px;
      height:40px;
      max-width: 120px;
      padding: 0 16px;
      color: #ffffff;
      background-color: #1867c0;
      border: 1px solid #1867c0;
      cursor: pointer;
    }
  }
</style>

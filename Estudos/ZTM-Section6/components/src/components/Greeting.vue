<template>
  <div>
    <p v-if="age >= 25">{{msg}}</p>
    <p v-else>Você precisa ter mais de 25 anos para ver essa mensagem</p>  
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  props: ["age"],
  data() {
    return {
      msg: 'Hello World!',
    }
  },
}
</script>

<style>

</style>
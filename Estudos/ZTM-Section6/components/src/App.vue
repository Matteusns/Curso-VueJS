<template>
  <div>
    <h3>Opa</h3>
    <Greeting 
      :age="age"
    />
    <User
      :age="age"
      :updateAgeFn="updateAgeCB"
      @ageChange="updateAge"
    />
  </div>
</template>


<script>
import Greeting from "./components/Greeting.vue"
import User from "./components/User.vue"

export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 20
    }
  },  
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num){
      this.age -= num
    }
  }
}
</script>

<style scoped lang="scss">
  $color: red;
  p {
    color: $color;
  }
</style>

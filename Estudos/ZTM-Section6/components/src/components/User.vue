<template>
  <div>
    <button type="button" @click="clickAge">Aumentar idade</button>
    <button type="button" @click="updateAgeFn(3)">Diminuir idade</button>
    <p>O usuario tem {{age}} anos</p>
    <p>{{ageDobled}}</p>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    age: {
      type: [Number],
      //required: true,
      //default: 20,
      validator(value) {
        return value < 130
      }
    },
    updateAgeFn: Function
  },
  emits: ["ageChange"],
  methods: {
    clickAge() {
      this.$emit('ageChange', 3)
    }
  },
  computed: {
    ageDobled() {
      return this.age * 2
    }
  }
}
</script>

<style>

</style>
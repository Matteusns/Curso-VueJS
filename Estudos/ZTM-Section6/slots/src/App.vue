<template>
  <AppForm>
    <template #help>
      <p>{{ help }}</p>
    </template>
    <template #fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template #buttons>
      <button type="submit">Submit</button>
    </template>
    <p>aaa</p>
  </AppForm>

  <AppForm>
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>

<script>
import AppForm from "./components/Form.vue"

export default {
  name: 'App',
  components: {
    AppForm
  },
  data() {
    return {
      help: 'This is a help text'
    }
  }
}
</script>

<style>
</style>

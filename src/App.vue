// App.vue

<template>
  <div id="app">
    <CoinForm />
  </div>
</template>

<script>
import CoinForm from './components/CoinForm.vue'

export default {
  name: 'app',
  components: {
    CoinForm
  }
}
</script>
<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

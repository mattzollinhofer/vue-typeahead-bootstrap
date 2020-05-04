<template>
  <div>
    Options: `Canada, United States, Mexico`,
    <vue-bootstrap-typehead
      :data="['Canada', 'United States', 'Mexico']"
      v-model="query"
      placeholder="Choose a country"
    />
    Selected Country: {{query}}
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueBootstrapTypehead from "../../../src/components/VueBootstrapTypeahead";

  export default {
    name: "HomePageDemo",
    components: {VueBootstrapTypehead},
    data(){
      return {
        query: ''
      }
    }
  }
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';
</style>

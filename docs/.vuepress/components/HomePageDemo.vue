<template>
  <div>
    <vue-typeahead-bootstrap
      :data="['Canada', 'United Kingdom', 'United States', 'Mexico']"
      v-model="query"
      showOnFocus
      placeholder="Choose a country"
    />
    Selected Country: {{query}}
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueTypeaheadBootstrap from "../../../src/components/VueTypeaheadBootstrap";

  export default {
    name: "HomePageDemo",
    components: {VueTypeaheadBootstrap},
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

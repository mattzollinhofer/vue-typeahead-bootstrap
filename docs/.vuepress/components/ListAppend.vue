<template>
  <div>
    <div class="pl-1 pb-2 pt-3">Selected color: {{query}}</div>
      <vue-typeahead-bootstrap
        v-model="query"
        v-bind="{ data }"
        placeholder="Choose your favorite color"
        @hitListAppend="addColor"
      >
        <template v-if="query.length > 1" slot="listAppend" :slot-scope="{ query }">
          Add: {{ query }}
        </template>
      </vue-typeahead-bootstrap>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueTypeaheadBootstrap from "../../../src/components/VueTypeaheadBootstrap";

  export default {
    name: "ListAppend",
    components: {VueTypeaheadBootstrap},
    data(){
      return {
        query: '',
        data: ['Red', 'Green', 'Blue']
      }
    },
    methods: {
      addColor(colorName) {
        this.data.push(colorName)
      }
    }
  }
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';
</style>

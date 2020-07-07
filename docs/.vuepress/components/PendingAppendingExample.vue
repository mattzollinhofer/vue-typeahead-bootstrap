<template>
  <div>
    <vue-typeahead-bootstrap
      class="mb-4"
      v-model="query"
      :data="users"
      @keydown.enter="search"
      :serializer="item => item.login"
      placeholder="Search GitHub Users"
      prepend="Username:"
      @input="searchUsers"
    >
      <template slot="append">
        <button  class="btn btn-primary">
          Search
        </button>
      </template>
    </vue-typeahead-bootstrap>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueTypeaheadBootstrap from "../../../src/components/VueTypeaheadBootstrap";
  import {debounce} from 'lodash'

  export default {
    name: "PendingAppendingExample",
    components: {VueTypeaheadBootstrap},
    data(){
      return {
        query: '',
        userRepositories: {},
        users: []
      }
    },

    methods: {
      searchUsers: debounce(function() {
        fetch(`https://api.github.com/search/users?q=${this.query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            if(!data.items){
              this.users = [];
            } else {
              this.users = data.items;
            }
          })
      }, 500)
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <vue-bootstrap-autocomplete
      class="mb-4"
      v-model="query"
      :data="users"
      @keydown.enter="search"
      :serializer="item => item.login"
      placeholder="Search GitHub Users"
      prepend="Username:"
      @input="searchUsers"
      @keyup.enter="handleEnter"
    >
      <template slot="append">
        <button  class="btn btn-primary">
          Search
        </button>
      </template>
    </vue-bootstrap-autocomplete>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueBootstrapAutocomplete from "../../../src/components/VueBootstrapAutocomplete";
  import {debounce} from 'lodash'

  export default {
    name: "PendingAppendingExample",
    components: {VueBootstrapAutocomplete},
    data(){
      return {
        query: '',
        userRepositories: {},
        users: []
      }
    },

    methods: {
      handleEnter: function(event){
        alert('keyup.enter pressed!');
      },
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

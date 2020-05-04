<template>
  <div>
    <VueBootstrapTypehead
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
    </VueBootstrapTypehead>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueBootstrapTypehead from "../../../src/components/VueBootstrapTypeahead";
  import {debounce} from 'lodash'

  export default {
    name: "PendingAppendingExample",
    components: {VueBootstrapTypehead},
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
            this.users = data.items;
          })
      }, 500)
    }
  }
</script>

<style scoped>

</style>

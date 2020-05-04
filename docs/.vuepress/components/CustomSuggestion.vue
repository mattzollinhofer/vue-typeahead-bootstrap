<template>
  <div>
    <vue-bootstrap-typehead
      class="mb-4"
      v-model="query"
      :data="users"
      :serializer="item => item.login"
      @hit="selecteduser = $event"
      placeholder="Search Github Users"
      @input="lookupUser"
    >
      <template slot="suggestion" slot-scope="{ data, htmlText }">
        <div class="d-flex align-items-center">
          <img
            class="rounded-circle"
            :src="data.avatar_url"
            style="width: 40px; height: 40px;" />

          <!-- Note: the v-html binding is used, as htmlText contains
               the suggestion text highlighted with <strong> tags -->
          <span class="ml-4" v-html="htmlText"></span>
          <i class="ml-auto fab fa-github-square fa-2x"></i>
        </div>
      </template>
    </vue-bootstrap-typehead>
    Selected user: <span v-if="selecteduser">{{selecteduser.login}}</span>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueBootstrapTypehead from "../../../src/components/VueBootstrapTypeahead";
  import {debounce} from 'lodash'

  export default {
    name: "APIExample",
    components: {VueBootstrapTypehead},
    data(){
      return {
        query: '',
        selecteduser: null,
        users: []
      }
    },

    methods: {
      lookupUser: debounce(function(){
        // in practice this action should be debounced
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

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';
</style>


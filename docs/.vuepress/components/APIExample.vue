<template>
  <div>
    <vue-typeahead-bootstrap
      class="mb-4"
      v-model="query"
      :data="users"
      :serializer="item => item.login"
      @hit="selecteduser = $event"
      :disabledValues="(selecteduser ? [selecteduser.login] : [])"
      placeholder="Search Github Users"
      @input="lookupUser"
    />
    Selected user: <span v-if="selecteduser">{{selecteduser.login}}</span>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueTypeaheadBootstrap from "../../../src/components/VueTypeaheadBootstrap";
  import {debounce} from 'lodash'

  export default {
    name: "APIExample",
    components: {VueTypeaheadBootstrap},
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

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';
</style>


<template>
  <div>
    <div class="pl-1 pb-2 pt-3">
      Selected user: <span v-if="selecteduser">{{selecteduser.login}}</span>
    </div>
    <vue-bootstrap-autocomplete
      class="mb-4"
      v-model="query"
      :data="users"
      :ieCloseFix="false"
      :serializer="item => item.login"
      @hit="selecteduser = $event"
      :disabledValues="(selecteduser ? [selecteduser.login] : [])"
      placeholder="Search Github Users"
      @input="lookupUser"
      :background-variant-resolver="(user) => ((user.id % 2) == 0) ? 'light':'dark'"
    />
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import VueBootstrapAutocomplete from "../../../src/components/VueBootstrapAutocomplete";
  import {debounce} from 'lodash'

  export default {
    name: "APIExample",
    components: {VueBootstrapAutocomplete},
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


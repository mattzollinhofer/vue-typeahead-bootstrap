# Examples

## Basic 
<HomePageDemo/>

```vue
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
  export default {
      data(){
        return {
          query: ''
        }
      }
    }
</script>
```

## API Example
<APIExample/>

```vue
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
      />
      Selected user: <span v-if="selecteduser">{{selecteduser.login}}</span>
  </div>
</template>

<script>
  import {debounce} from 'lodash';

  export default {
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
```

## Prepend/Append
<PendingAppendingExample/>

```vue
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
  import {debounce} from 'lodash';
  export default {
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
```

## Custom Suggestion Slot
<CustomSuggestion/>

```vue
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
  import {debounce} from 'lodash';
  export default {
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
```

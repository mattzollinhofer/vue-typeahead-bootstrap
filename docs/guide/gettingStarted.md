# Getting Started

## Installation
```js
// yarn
yarn add vue-typeahead-bootstrap

// npm
npm install vue-typeahead-bootstrap --save
```

## Registration

```js
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

// Required dependency of bootstrap css/scss files
import 'bootstrap/scss/bootstrap.scss';

// Global registration
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)

// or

// Local Registration
export default {
  components: {
    VueTypeaheadBootstrap
  }
}
```

## Basic Usage
The only required props are a `v-model` and a `data` array.

```html
<vue-typeahead-bootstrap
  v-model="query"
  :data="['Canada', 'United States', 'Mexico']"
/>
```

## Nuxt.js

Configure the [build transpile](https://nuxtjs.org/api/configuration-build/#transpile) option in `nuxt.config.js`.
```js
{
  build: {
    transpile: [
      ({ isServer }) => 'vue-typeahead-bootstrap'
    ]
  }
}
```

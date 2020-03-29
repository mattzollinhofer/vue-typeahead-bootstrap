# vue-typeahead-bootstrap

A simple `list-group` based typeahead/autocomplete using Bootstrap 4 and Vue 2

<img src="https://raw.githubusercontent.com/mattzollinhofer/vue-typeahead-bootstrap/master/assets/screenshot.png" alt="Preview image of the vue-typeahead-bootstrap component">

## [View The Examples](https://mattzollinhofer.github.io/vue-typeahead-bootstrap/#/examples)

## Installation

From NPM:

[![NPM](https://nodei.co/npm/vue-typeahead-bootstrap.png)](https://www.npmjs.com/package/vue-typeahead-bootstrap)

```
> npm i vue-typeahead-bootstrap --save
```

Minified UMD and CommonJS builds are available in the 'dist' folder. The component is also available for use in the browser directly on unpkg:

```html
<link href="https://unpkg.com/vue-typeahead-bootstrap/dist/VueBootstrapTypeahead.css" rel="stylesheet">
<script src="https://unpkg.com/vue-typeahead-bootstrap"></script>
```

## Usage

Import and register the component
```javascript
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

// OR

// Local registration
export default {
    components: {
        VueBootstrapTypeahead
    }
}
```

### Basic Usage
The only required attribute is a `data` array.

```html
<vue-bootstrap-typeahead 
  v-model="query"
  :data="['Canada', 'USA', 'Mexico']"
/>
```

### Working with API's

The typeahead does not fetch any data, for maximum flexibility it will only work with already loaded API responses in the form of arrays. The `serializer` attribute allows you to define a function to turn each array item in the response into a text string, which will appear in the results.

```html
<template>
  <vue-bootstrap-typeahead
    :data="addresses"
    v-model="addressSearch"
    size="lg"
    :serializer="s => s.text"
    placeholder="Type an address..."
    @hit="selectedAddress = $event"
  >
</template>

<script>
import _ from 'underscore'

const API_URL = 'https://api-url-here.com?query=:query'

export default {
  name: 'TestComponent',

  data() {
    return {
      addresses: [],
      addressSearch: '',
      selectedAddress: null
    }
  },

  methods: {
    async getAddresses(query) {
      const res = await fetch(API_URL.replace(':query', query))
      const suggestions = await res.json()
      this.addresses = suggestions.suggestions
    }
  },

  watch: {
    addressSearch: _.debounce(function(addr) { this.getAddresses(addr) }, 500)
  }
}
</script>

```

### Attributes

Name | Type | Default | Description
--- | --- | --- | ---
data | `Array` | | Array of data to be available for querying. **Required**
disableSort | `Boolean` | false | If set to true, no sorting occurs and the list is presented to the user as it is given to the component. Use this if you sort the list before giving it to the component. Ex: an elasticsearch result being passed to Vue.
serializer | `Function` | `input => input` | Function used to convert the entries in the `data` array into a text string.
size | `String` | | Size of the `input-group`. Valid values: `sm` or `lg`
backgroundVariant | `String` | | Background color for the autocomplete result `list-group` items. [See valid values](http://getbootstrap.com/docs/4.1/utilities/colors/#background-color)
textVariant | `String` | | Text color for the autocomplete result `list-group` items. [See valid values](http://getbootstrap.com/docs/4.1/utilities/colors/#color)
inputClass | `String` | | Class to the added to the `input` tag for validation, etc.
maxMatches | `Number` | 10 | Maximum amount of list items to appear.
minMatchingChars | `Number` | 2 | Minimum matching characters in query before the typeahead list appears
showOnFocus | `Boolean` | false | Show results as soon as the input gains focus before the user has typed anything.
showAllResults | `Boolean` | false | Show all results even ones that highlighting doesn't match. This is useful when interacting with a API that returns results based on different values than what is displayed. Ex: user searches for "USA" and the service returns "United States of America".
prepend | `String` | | Text to be prepended to the `input-group`
append | `String` | | Text to be appended to the `input-group`

### Events
Name | Description
--- | ---
`hit` | Triggered when an autocomplete item is selected. The entry in the input `data` array that was selected is returned.
`input` | The component can be used with `v-model`
`focus` | Triggered focus event trigered on `input` element.

### Slots

There are `prepend` and `append` slots available for adding buttons or other markup. Overrides the `prepend` and `append` attributes.

### Scoped Slots

You can use a [scoped slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) called `suggestion` to define custom content
for the suggestion `list-item`'s

```html
<vue-bootstrap-typeahead
  :data="countries"
  v-model="cntrySearch"
  :serializer="s => s.name"
  placeholder="Canada, United States, etc..."
  @hit="selectedCountry = $event"
>
  <!-- htmlText is bound to the matched text derived from the serializer function -->
  <!-- data is bound to the matching array element in the data prop -->
  <template slot="suggestion" slot-scope="{ data, htmlText }">
    <span v-html="htmlText"></span>&nbsp;<small>{{ data.code }}</small>
  </template>
</vue-bootstrap-typeahead>
```

## Local Examples/Demo

Clone this repository and run `npm run serve` and navigate to http://localhost:8080 to launch the documentation. The source is in `src/views/Home.vue`

You can also view and edit examples hosted on CodePen [here](https://mattzollinhofer.github.io/vue-typeahead-bootstrap/#/examples)

## Contributing

Please note that active development is done on the `master` branch. PR's are welcome!

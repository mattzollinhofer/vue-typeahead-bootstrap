![Nodejs workflow status](https://github.com/drikusroor/vue-bootstrap-autocomplete/actions/workflows/nodejs.yml/badge.svg)

# Looking for Maintainer
Hey everyone, I haven't had the time to put into this project as I did in the past and I'm looking for a maintainer(s) to hand this off to. We've advanced the project substantially in terms of accessibility and some functionality and am looking for the next person to carry this forward. Contact me directly or open an issue if you're interested!

# vue-bootstrap-autocomplete

A simple `list-group` based typeahead/autocomplete using Bootstrap 4 and Vue 2

<img src="https://raw.githubusercontent.com/drikusroor/vue-bootstrap-autocomplete/main/assets/screenshot.png" alt="Preview image of the vue-bootstrap-autocomplete component">

Here are some live examples, [give them a try here.](https://drikusroor.github.io/vue-bootstrap-autocomplete-docs/examples/examples.html#custom-suggestion-slot)

## Getting Started
[Getting started guide is here.](https://drikusroor.github.io/vue-bootstrap-autocomplete-docs/guide/gettingStarted.html#installation)

## Documentation
[Docs are here.](https://drikusroor.github.io/vue-bootstrap-autocomplete-docs/)

## Contributing
Please note that active development is done on the `main` branch. PR's are welcome! Here's the basic steps to get going.

Here's the steps to getting the project to work locally:

1. Clone the repo: `git clone git@github.com:drikusroor/vue-bootstrap-autocomplete.git`
2. `npm ci`
3. `vuepress dev docs`
4. Open a browser and go to localhost:8080

* Then to run tests: `npm run test:unit`

## 2.13.0 Release - Migration Necessary
If you were using a version prior to 2.13.0, you'll need to change all references of `vue-bootstrap-typeahead` or `vue-typeahead-bootstrap` to `vue-bootstrap-autocomplete` and of `VueBootstrapTypeahead` or `VueTypeaheadBootstrap` to `VueBootstrapAutocomplete.

The original projects lost it's maintainers and we picked it up to keep it moving. 

More info here if you're interested:
* [vue-bootstrap-typeahead](https://github.com/alexurquhart/vue-bootstrap-typeahead/issues/60)
* [vue-typeahead-bootstrap](https://github.com/mattzollinhofer/vue-typeahead-bootstrap)

## Local Examples/Demo
Clone this repository and run `vuepress dev docs`. Then, navigate to http://localhost:8080/vue-bootstrap-autocomplete-docs/ to launch the documentation and examples. The source is in `docs/README.md` and `docs/.vuepress`

## Lineage
* I want to acknowledge the original repository by Alex Urquhart for this work: https://github.com/alexurquhart/vue-bootstrap-typeahead.
* I also want to acknowledge the continuation of Matt Zollinhofer of this project: https://github.com/mattzollinhofer/vue-typeahead-bootstrap.

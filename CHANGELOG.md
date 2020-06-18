## 2.2.0 - 18 Jun 2020
- Fix IE support for click handling
- Clean up tests

## 2.1.0 - 26 May 2020
- Add disabled option

## 2.0.2 - 26 May 2020
- Rename file

## 2.0.1 - 22 May 2020
- Add migration instructions

## 2.0.0 - 22 May 2020
- Breaking change: Rename this component fully. To continue using this component, you'll need to change all
  your usages from `vue-bootstrap-typeahead` to `vue-typeahead-bootstrap`.

- Bug Fix: Handle `ESC` keypress more appropriately
- Feature: Add `autoclose` to allow for the component to hide upon item selection
- Feature: Migrate to VuePress style documentation

## 1.0.3 - 2 Mar 2020
- Allow up/down arrow keys to wrap without an extra key push.

## 1.0.2 - 1 Mar 2020
- Added `disableSort`. No sorting occurs and the list is presented to the user as it is given to the component.
- Fix IE 11 display issue. Fixes issue listed here:
    https://github.com/alexurquhart/vue-bootstrap-typeahead/issues/2#issuecomment-418142023

## 1.0.1 - 22 Feb 2020
- Add documentation.

## 1.0.0 - 22 Feb 2020
- Restarted maintenance of this project. Needed to rename because I was unable to contact the original
  developer.

Merge PRs from previous repo:
- Keyboard support for arrow keys
- Added `showOnFocus`. Show results as soon as the input gains focus before the user has typed anything.
- Added `showAllResults`. Show all results even ones that highlighting doesn't match.
- Initialize input field correctly

## 0.1.2 - 28 Aug 2018
- Fixed #3 & #4

## 0.2.0 - 6 Sept 2018
- Added a scoped slot for custom suggestion list items
- Added library build + unpkg tags
- Updated documentation site (working on gh-pages)
- Added basic unit tests

## 0.2.1 - 7 Sept 2018
- Fixed positioning bug for the typeahead list when the prepend slot was used

## 0.2.2 - 7 Sept 2018
- Forgot to update the `dist/` folder with new build from last release.
- Added updated documentation. `docs` folder now to be published to gh-pages
- Updated readme
- Added `.npmignore`

## 0.2.3 - 21 Sept 2018
- Fixed Safari bug (issue #14)
- Fixed error when `v-model` is not used on component (issue #18)

## 0.2.4 - 21 Sept 2018
- Re-fixed error when `v-model` is not used on component (issue #18)

## 0.2.5 - 21 Sept 2018
- Re-fixed error when `v-model` is not used on component (issue #18)
- More comprehensive unit testing is now a priority, edge cases are harder to find than I thought :joy:

## 0.2.6 - 30 Sept 2018
- Fixed `maxMatches` bug. Thanks to @jimfisher

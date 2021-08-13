## 2.12.0 - 26 Aug 2021
- Revert localization changes
- Update CI build targets

## 2.11.1 - 23 Apr 2021
- Improve screen reader text support

## 2.11.0 - 7 Apr 2021
- Rebuild dist files that were missed in previous two versions (2.9.0 & 2.10.0)

## 2.10.0 - 5 Apr 2021
- Provide for customizable screen reader text

## 2.9.0 - 5 Apr 2021
- Support 'enter' selecting the first item of the list

## 2.8.0 - 9 Feb 2021
- Issues blur event when leaving the dropdown navigated to with arrow keys

## 2.7.3 - 9 Feb 2021
- Fix internationalization support. Bug with the `z` characters

## 2.7.2 - 31 Dec 2020
- Update highlight.js for security vulnerability
- Update missing doc link

## 2.7.1 - 31 Dec 2020
- Update docs to match new usage of `list-group-item-${context}`

## 2.7.0 - 31 Dec 2020
- Add support for different background colors per list item
- NOTE: also changing from `bg-${context}` to `list-group-item-${context}` to match bootstrap docs and allow text colors to change automatically

## 2.6.1 - 28 Dec 2020
- Add internationalization support, specifically for diacritics (accents, etc)
- Allow `md` as a size option

## 2.5.6 - 28 Dec 2020
- Formalize IE close fix

## 2.5.5 - 19 Dec 2020
- Include lodash in dependencies

## 2.5.4 - 11 Nov 2020
- Reduced package size

## 2.5.3.beta - 28 Sep 2020
- Attempted a11y improvements to use standard combobox aria tags

## 2.5.2 - 28 Sep 2020
- Fix IE dropdowns closing

## 2.5.1 - 08 Aug 2020
- Fix broken key handling events

## 2.5.0 - 07 Jul 2020
- Propagate keyup events from the input.

## 2.4.1 - 05 Jul 2020
- Fix bug when given a null query

## 2.4.0 - 05 Jul 2020
- Add the ability to disable list items

## 2.3.0 - 18 Jun 2020
- Add support for inputName

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

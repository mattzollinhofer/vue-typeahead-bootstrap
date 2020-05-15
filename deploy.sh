#!/usr/bin/env sh

# Build latest docs
yarn docs:build

# navigate to docs output directory
cd docs/.vuepress/dist

# create a new blank git repository
git init
git add -A
git commit -m 'deploy'

# force push to docs repo
git push -f git@github.com:mattzollinhofer/vue-typeahead-bootstrap-docs.git master:gh-pages

cd -

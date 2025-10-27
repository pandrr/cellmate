#!/bin/bash
#
# Requires: fswatch (install with 'brew install fswatch')
#

WATCHED_FILES="index.js dist/cellmate.css"

fswatch -o $WATCHED_FILES | while read event
do
  npx webpack
  cp dist/cellmate.css ~/cables_dev/cables_ui/scss/components/cellmate.scss
  cp dist/cellmate.js ~/cables_dev/cables_ui/libs/ui/cellmate.js
done



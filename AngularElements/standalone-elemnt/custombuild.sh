#!/bin/sh
ng build standalone-elemnt --prod --output-hashing=none && cat dist/standalone-elemnt/runtime-es5.js dist/standalone-elemnt/polyfills-es5.js dist/standalone-elemnt/main-es5.js > preview/standaloneelemnt.js

#!/bin/bash

npm install
cd docs/nodeDocs
npm install
cd ../../
pm2 restart all
#!/bin/bash

git remote -v
read -p "Ok?" yn
case $yn in
    [Nn]* ) exit;;
    [YySs\n]* ) break;;
esac
git add .
now="$(date +'%b%d_%Y')"
echo "commiting $(now)..."
git commit -m $now
git push origin master


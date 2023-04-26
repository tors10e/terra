git checkout master
git push
git pull
export PUBLIC_URL=https://terraincognitavineyard.com
npm run build
scp -r ./build/* torsten@terraincognitavineyard.com:/home/www/terraincognitavineyard.com

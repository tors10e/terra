git checkout master
git push
git pull
npm run build
scp -r ./build/* torsten@terraincognitavineyard.com:/home/www/terraincognitavineyard.com

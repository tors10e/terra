mkdir ~/temp
cd ~/temp
git clone https://github.com/tors10e/terra.git
cd terra
git checkout master
scp -r ./public/* torsten@terraincognitavineyard.com:/home/www/terraincognitavineyard.com
rm -rf ~/temp/terra

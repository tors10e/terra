mkdir ~/temp
cd ~/temp
git clone https://github.com/tors10e/terra.git
cd terra
git checkout master
scp -r ./* torsten@terraincognitavineyard.com:/home/www/terraincognitavineyard.com
rm -r ~/temp/terra

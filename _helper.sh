docker stats
docker ps -a -q 
# Get os version
cat /etc/os-release
# Get Ip address
ifconfig -a 
# Get ip address 
curl ifconfig.me.
dig +short myip.opendns.com @resolver1.opendns.com
host myip.opendns.com resolver1.opendns.com | grep "myip.opendns.com has" | awk '{print $4}'
wget -qO- http://ipecho.net/plain | xargs echo
wget -qO - icanhazip.com

#Linux process
ps aux 
ps aux | grep db
pgrep -l name 
# kill
kill -9 16750


## Server 
```bash
pm2 start "npm run server -- -p 80" --name scfo -i max
pm2 reload scfo
pm2 restart scfo
pm2 stop scfo
pm2 delete scfo

pm2 list 
pm2 ls
pm2 logs

pm2 monit
```
### Ensure pm2 starts on reboot (one time)
```bash
pm2 startup
```
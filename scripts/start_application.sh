#!/bin/bash
cd /home/ec2-user/myapp
pm2 start dist/main.js --name myapp

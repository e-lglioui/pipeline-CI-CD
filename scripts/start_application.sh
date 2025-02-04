#!/bin/bash
cd /home/ec2-user/pharmacy-backend

# Start the application with PM2
pm2 start dist/main.js --name "pharmacy-backend"

# Save PM2 configuration
pm2 save 
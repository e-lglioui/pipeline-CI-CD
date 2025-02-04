#!/bin/bash
# Stop and remove any existing application process
if pm2 list | grep -q "pharmacy-backend"; then
    pm2 stop pharmacy-backend
    pm2 delete pharmacy-backend
fi

# Clean up old deployment
if [ -d "/home/ec2-user/pharmacy-backend" ]; then
    rm -rf /home/ec2-user/pharmacy-backend
fi

# Install or update necessary tools
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi 
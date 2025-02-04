#!/bin/bash
cd /home/ec2-user/pharmacy-backend

# Install production dependencies
npm ci --only=production

# Set proper permissions
chown -R ec2-user:ec2-user /home/ec2-user/pharmacy-backend 
#!/bin/bash
# Wait for the application to be responsive
sleep 10

# Test if the application is running
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health)

if [ "$response" = "200" ]; then
    echo "Application is running successfully"
    exit 0
else
    echo "Application is not running properly"
    exit 1
fi 
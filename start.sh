#!/bin/bash

# Start the correct environment for the chosen env variable
# If no env variable is set, default to production
MODE="${1:-production}"
if [ ${MODE} == "production" ]; then
    echo "Starting production environment"
    docker-compose up  ${MODE}-service
elif [ ${MODE} == "dev" ]; then
    echo "Starting development environment"
    docker-compose up development-service
else
    echo "Invalid environment variable"
    exit 1
fi


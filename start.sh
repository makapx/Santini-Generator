#!/bin/bash

# Start the correct environment for the chosen env variable
# If no env variable is set, default to production
MODE=${MODE:-production}
if [ ${MODE} == "production" ]; then
    echo "Starting production environment"
    docker-compose up myservice-${MODE}
elif [ ${MODE} == "development" ]; then
    echo "Starting development environment"
    docker-compose up myservice-${MODE}
else
    echo "Invalid environment variable"
    exit 1
fi


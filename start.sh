#!/bin/bash

# Start the correct environment for the chosen env variable
# If no env variable is set, default to production
MODE="${1:-production}"
if [[ "$MODE" == "production" || "$MODE" == "dev" ]]; then
    echo "Starting $MODE environment"
    docker-compose up  ${MODE}-service
else
    echo "Invalid environment variable"
    exit 1
fi


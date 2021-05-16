#!/bin/bash

export REPO_NAME='portfolio'
export JOB_NAME='portfolio_PreCodeReview'

curl "https://api.github.com/repos/jackwhelan/$REPO_NAME/commits/$GIT_COMMIT/status?access_token=$GH_TOKEN" \
-H "Content-Type: application/json" \
-X POST \
-d "{
    \"state\": \"failure\",
    \"context\": \"jenkins/$REPO_NAME\",
    \"description\": \"Jenkins\",
    \"target_url\": \"http://89.100.10.68:8080/job/$JOB_NAME/$BUILD_NUMBER/console\"
}"
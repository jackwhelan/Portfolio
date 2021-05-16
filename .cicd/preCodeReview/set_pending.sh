#!/bin/bash

export REPO_NAME='portfolio'
export JOB_NAME='portfolio_PreCodeReview'

curl "//api.github.com/repos/$REPO_NAME/statuses/$GIT_COMMIT?access_token=$GH_TOKEN" \
-H "Content-Type: application/json" \
-X POST \
-d "{
    \"state\": \"pending\",
    \"context\": \"jenkins/$REPO_NAME\",
    \"description\": \"Jenkins\",
    \"target_url\": \"//89.100.10.68:8080/job/$JOB_NAME/$BUILD_NUMBER/console\"
}"
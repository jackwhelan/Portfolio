#!/bin/bash

export REPO_NAME='portfolio'
export JOB_NAME='portfolio_PreCodeReview'
export GITHUB_ORG='jackwhelan'

curl "https://api.github.com/repos/$GITHUB_ORG/$REPO_NAME/statuses/$GIT_COMMIT?access_token=$GH_TOKEN" \
-H "Content-Type: application/json" \
-X POST \
-d "{
    \"state\": \"success\",
    \"context\": \"jenkins/$REPO_NAME\",
    \"description\": \"Jenkins\",
    \"target_url\": \"http://89.100.10.68:8080/job/$JOB_NAME/$BUILD_NUMBER/console\"
}"
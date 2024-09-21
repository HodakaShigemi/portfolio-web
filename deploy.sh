#!/bin/bash

profile=portfolio

npm run build && aws --profile $profile s3 sync --delete ./out s3://www.se-shigemi.com
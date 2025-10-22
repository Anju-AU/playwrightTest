ENVIRONMENT =$1
if["$ENVIRONMENT" == "staging"]; then
    echo "Environment is staging"
    echo "env_output=staging" >> $GITHUB_OUTPUT
elif["$ENVIRONMENT" == "production"]; then
    echo "Environment is production"
    echo "env_output=production" >> $GITHUB_OUTPUT
else
    echo "Environment is Unknown"
    echo "env_output=unknown" >> $GITHUB_OUTPUT
fi


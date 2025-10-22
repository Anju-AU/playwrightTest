ENVIRONMENT=$1
RESULT=""
if["$ENVIRONMENT" =="staging"]; then
    ITEMS=("alpha" "beta" "gamma")
elif["$ENVIRONMENT" == "production"]; then
    ITEMS=("prod-app", "prod-db", "prod-cache")
else
    ITEMS=("default1","def2")
fi

for item in "${ITEMS[@]}"; do
    echo "processing item : $item for $ENVIRONMENT"
    RESULT+="$item "
done

RESULT= ${RESULT%,}
echo "loop_result=$RESULT" >> $GITHUB_OUTPUT
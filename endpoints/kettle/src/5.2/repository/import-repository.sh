#!/bin/bash

#
# Script to import the repository from a zip file in the current directory.
#

# Parameters
if [ -z "$1" ]; then
  echo ""
  echo "Syntax: ./import-repository.sh <zip_name>"
  echo ""
  echo "Examples:"
  echo " ./import-repository.sh \"Alflytics\""
  echo " ./import-repository.sh \"Alflytics.ETL\""
  echo ""
  exit 1
fi
ZIP_NAME=$1

# Settings
CURRENT_PATH="$PWD"
ZIP_PATH="$CURRENT_PATH/$ZIP_NAME.zip"
PENTAHO_SERVER_PATH="$CURRENT_PATH/../../../../../../../.."
PENTAHO_USER="admin"
PENTAHO_PASSWORD="password"

echo ""
echo "Importing the Alflytics repository from '$ZIP_NAME.zip'..."
echo ""

cd $PENTAHO_SERVER_PATH

./import-export.sh --import --url=http://localhost:8080/pentaho --username=$PENTAHO_USER --password=$PENTAHO_PASSWORD --charset=UTF-8 --path="/" --overwrite=true --permission=true --retainOwnership=true --file-path="$ZIP_PATH"

echo ""


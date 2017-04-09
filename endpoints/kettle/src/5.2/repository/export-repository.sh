#!/bin/bash

#
# Script to export the repository into a zip file in the current directory.
#

# Parameters
if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
  echo ""
  echo "Syntax: ./export-repository.sh <repository_path> <repository_folder> <zip_prefix>"
  echo ""
  echo "Examples:"
  echo " ./export-repository.sh \"public\" \"Alflytics\" \"Alflytics\""
  echo " ./export-repository.sh \"public/Alflytics\" \"ETL\" \"Alflytics.ETL\""
  echo ""
  exit 1
fi
REPOSITORY_PATH=$1
REPOSITORY_FOLDER=$2
ZIP_PREFIX=$3

# Settings
CURRENT_PATH="$PWD"
ZIP_NAME="$ZIP_PREFIX.$(date +\%Y-%m-%d.%H:%M)"
ZIP_PATH="$CURRENT_PATH/$ZIP_NAME.zip"
PENTAHO_SERVER_PATH="$CURRENT_PATH/../../../../../../../.."
PENTAHO_USER="admin"
PENTAHO_PASSWORD="password"

echo ""
echo "Exporting the Alflytics repository into '$ZIP_NAME.zip'..."
echo ""

cd "$PENTAHO_SERVER_PATH"

./import-export.sh --export --url=http://localhost:8080/pentaho --username=$PENTAHO_USER --password=$PENTAHO_PASSWORD --charset=UTF-8 --path="/$REPOSITORY_PATH/$REPOSITORY_FOLDER" --file-path="$ZIP_PATH"

cd "$CURRENT_PATH"

echo ""
echo "Changing '$ZIP_NAME' to properly update the content..."

mkdir "$ZIP_NAME"
unzip -qq "$ZIP_PATH" -d "$ZIP_NAME"
cd "$ZIP_NAME"
mkdir -p "$REPOSITORY_PATH"
mv "$REPOSITORY_FOLDER" "$REPOSITORY_PATH"
sed "s/rootFolder=\"\/${REPOSITORY_PATH/\//\\\/}\/\"/rootFolder=\"\/\"/g" "exportManifest.xml" > "exportManifest.new.1.xml"
sed "s/path=\"$REPOSITORY_FOLDER/path=\\\"${REPOSITORY_PATH/\//\\\/}\/$REPOSITORY_FOLDER/g" "exportManifest.new.1.xml" > "exportManifest.new.2.xml"
rm "exportManifest.new.1.xml"
rm "exportManifest.xml"
mv "exportManifest.new.2.xml" "exportManifest.xml"
zip -rq "$ZIP_NAME.zip" "public" "exportManifest.xml"

echo "done!"
echo ""
echo "Updating the '$ZIP_NAME.zip'..."

rm "../$ZIP_NAME.zip"
mv "$ZIP_NAME.zip" "../$ZIP_NAME.zip"

cd ".."
rm -rf "$ZIP_NAME"

echo "done!"
echo ""


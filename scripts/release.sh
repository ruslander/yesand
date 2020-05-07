docker build -t yesand -f continer/Dockerfile .
imageid=$(docker images | grep "yesand" | grep "latest" | awk '{print $3}')

version=$(date +%s)
echo $version > version.txt

echo "Tagging latest [yesand#$imageid] with $version"
docker tag $imageid i95north/yesand:$version
docker push i95north/yesand

git tag -a v$version -m "Tagged git with v$version"
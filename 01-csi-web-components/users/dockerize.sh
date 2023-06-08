TAG=$1

echo "Building image..."

docker build -t ${TAG} .


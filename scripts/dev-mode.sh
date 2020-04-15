docker build -t yesand -f continer/Dockerfile .

docker run -it --entrypoint /bin/bash -v $PWD/app:/demo -w /demo -p 8080:8080 yesand
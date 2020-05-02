
build:
	docker build -t yesand -f continer/Dockerfile .

run:
	docker run -p 8080:8080 yesand


mount:
	docker run -it --entrypoint /bin/bash -v $$PWD/app:/demo -w /demo -p 8080:8080 yesand

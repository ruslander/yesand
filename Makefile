
build:
	docker build -t yesand -f continer/Dockerfile .

start:
	docker run -d -p 8080:8080 yesand:latest

stop:
	docker stop $$(docker ps | awk -v image=yesand:latest '$$2 == image {print $$1}')


mount:
	docker run -it --entrypoint /bin/bash -v $$PWD/app:/demo -w /demo -p 8080:8080 yesand

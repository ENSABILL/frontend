# How to run project (if you want use docker follow these steps) :

## Prerequisites
1. install docker
2. linux or use wsl2 on windows  (on windows without wsl2 it might not work well so prefer run project and configure it yourself)

## Run client container
```bash
./start_all.sh
```
#### client app is accessible on : http://localhost:4200


## stop all containers
```bash
./stop_all.sh
```

## install a npm package in docker container
```bash
./mynpm install <nameOfPackage>
```
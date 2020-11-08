# Deploy

This project-example is about automate scripts to deploy and running a Native Cloud application developed using Spring-Cloud and Spring-Netflix.

## Install

To install copy the this files: <b>registry.js</b> and <b>docker.js</b> to <b>'$AKUMO_HOME/lib/js/cloud'</b> directory.

## Native Cloud Application

Clone the repository below:

```
https://github.com/akumoplatform/native-cloud.git
```

## Running

### config
Firstly you need edit the either files <b>'config-dev.json'</b> and <b>'/cloud/apps/varApps.js'</b> setting the variables pointing for your 'native-cloud' application folders and others environment variables.

### apps

Navigate to <b>'<this_repository>/examples/cloud/apps'</b> and run:

```
<$AKUMO_HOME>/akumo -i:mainApps.js -Denv:dev
```

### containers

Navigate to <b>'<this_repository>/examples/cloud/containers'</b> and run:

```
<$AKUMO_HOME>/akumo -i:mainContainers.js -Denv:dev
```

## testing

### mock endpoints

To test manually:

```
http://localhsot:8889/customer/v1

http://localhost:8089/api/customer/v1/all
```
To test using script navigate to <b>'<this_repository>/examples/cloud/test'</b> and run:

```
<$AKUMO_HOME>/akumo -i:test.js
```

### registry

To see all instances registred on Eureka access:

```
http://localhost:8761/
```



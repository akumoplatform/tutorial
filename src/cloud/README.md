# Deploy

This project-example is about automate scripts to deploy and running a Native Cloud application developed using Spring-Cloud and Spring-Netflix.

## Install

To install copy the this files: <b>registry.js</b> and <b>docker.js</b> to <b>'$AKUMO_HOME/lib/js'</b> directory.

## Native Cloud Application

Clone the repository below:

```
https://github.com/akumoplatform/native-cloud.git
```

## Running

Firstly you need edit the <b>'config-dev.json'</b> and set the variables pointing for your 'native-cloud' application folders.

### Apps

Navigate to <b>'<this_repository>/examples/cloud/apps'</b> and run:

```
<$AKUMO_HOME>/akumo -i:mainApps.js -Denv:dev
```

### Containers

Navigate to <b>'<this_repository>/examples/cloud/containers'</b> and run:

```
<$AKUMO_HOME>/akumo -i:mainContainers.js -Denv:dev
```

## Testing

### mock endpoints

To test manually:

```
http://192.168.178.26:8889/customer/v1

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



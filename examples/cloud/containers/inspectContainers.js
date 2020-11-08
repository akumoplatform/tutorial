io.lib('/cloud/docker.js');

let container = docker.ps('8761/tcp');//gatewayC1
let id = container[0].containerId;
let inspectRaw = docker.inspect(id);

console.log(inspectRaw);

let inspectObj = JSON.parse(inspectRaw);

console.log(inspectObj[0].Id);

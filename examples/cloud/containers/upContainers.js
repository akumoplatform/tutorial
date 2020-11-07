let buildConfigRaw = docker.build({'args':['.', '-t', 'akumo/gateway:latest'], 'base': config.mac.gatewaySrc, 'wait':true});
console.log(buildConfigRaw);

let dev = { 'url': 'http://localhost:8761/admin' };
const regDev = registry(dev);

//const regDevAll = JSON.parse(regDev.all());
//console.log(regDevAll[0].instances[0].appName);

let c1 = { 
    'args': ['--network', 'akumo-native-cloud', '-p', '1881:1881', '--name', 'gatewayC11', 'akumo/gateway:latest'], 
    'stop': ' ', 
    'wait': false 
}

let c2 = { 
    'args': ['--network', 'akumo-native-cloud', '-p', '8282:8282', '--name', 'gatewayC12', 'akumo/gateway:latest'], 
    'stop': ' ', 
    'wait': false 
}

let c3 = { 
    'args': ['--network', 'akumo-native-cloud', '-p', '8383:8383', '--name', 'gatewayC13', 'akumo/gateway:latest'], 
    'stop': ' ', 
    'wait': false 
}
regDev.up([c1, c2, c3]);
io.lib('/docker/docker.js');
io.rel('dockerConfig.js');

console.log(cmd({ 'args': ['docker', 'network', 'create', 'akumo-native-cloud'], 'wait': true }).exe().getRaw());

let buildConfigRaw = docker.build(['.', '-t', 'akumo/config:latest'], { 'base': config.mac.configSrc });

let configRaw = docker.run(['--network', 'akumo-native-cloud', '-p', '8888:8888', '--name', 'config', 'akumo/config:latest'], { 'stop': 'Started' });

docker.build(['.', '-t', 'akumo/registry:latest'], { 'base': config.mac.registrySrc });
docker.run(['--network', 'akumo-native-cloud', '-p', '8761:8761', '--name', 'registry', 'akumo/registry:latest'], { 'stop': 'Started' });

docker.build(['.', '-t', 'akumo/gateway:latest'], { 'base': config.mac.gatewaySrc });
let gatewayRaw = docker.run(['--network', 'akumo-native-cloud', '-p', '8089:8089', '--name', 'gateway', 'akumo/gateway:latest'], { 'stop': 'Started', 'wait': false });

console.log(gatewayRaw);



io.lib('/docker/docker.js');
io.rel('varContainers.js');
io.rel('stopContainers.js');

console.log(cmd({ 'args': ['docker', 'network', 'create', 'akumo-native-cloud'], 'wait': true }).exe().getRaw());

docker.build({ 'args': ['.', '-t', 'akumo/config:latest'], 'base': config.mac.configSrc });
docker.build({ 'args': ['.', '-t', 'akumo/gateway:latest'], 'base': config.mac.gatewaySrc });
docker.build({ 'args': ['.', '-t', 'akumo/registry:latest'], 'base': config.mac.registrySrc });
docker.build({ 'args': ['.', '-t', 'akumo/customer:latest'], 'base': config.mac.customerSrc });

docker.run({ 'args': ['--network', 'akumo-native-cloud', '-p', '8888:8888', '--name', 'config', 'akumo/config:latest'], 'stop': 'Started' });
docker.run({ 'args': ['--network', 'akumo-native-cloud', '-p', '8761:8761', '--name', 'registry', 'akumo/registry:latest'], 'stop': 'Started' });
docker.run({ 'args': ['--network', 'akumo-native-cloud', '-p', '8089:8089', '--name', 'gateway', 'akumo/gateway:latest'], 'stop': 'Started', 'wait': false });
docker.run({ 'args': ['--network', 'akumo-native-cloud', '-p', '8889:8889', '--name', 'auth', 'akumo/customer:latest'], 'stop': 'Started', 'wait': false });

io.lib('/docker/docker.js');

console.log(docker.run({ 'args': ['--network', 'akumo-native-cloud', '-p', '8081:8081', '--name', 'auth', 'akumo/customer:latest'], 'stop': 'Started', 'wait': false }));
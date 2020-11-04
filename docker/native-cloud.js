io.lib('/docker/docker.js');

function registry(configurations) {
    return {
        config: configurations,
        all: function () {
            let clientHttp = http().url(this.config.url);
            return clientHttp.get();
        },
        up: function () {
            console.log(docker.run(['--network', 'akumo-native-cloud', '-p', '9989:9989', '--name', 'gateway2', 'akumo/gateway:latest'], { 'stop': ' ', 'wait': false }));
        
        }
    }
}

let dev = { 'url': 'http://localhost:8761/admin' };
const regDev = registry(dev);

const regDevAll = JSON.parse(regDev.all());

console.log(regDevAll[0].instances[0].appName);
regDev.up();
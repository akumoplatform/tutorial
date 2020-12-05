let config = {
    "src": "/Users/alissonpedrina/Documents/gitprojects/platform/native-cloud/",
    "configSrc": "/Users/alissonpedrina/Documents/gitprojects/platform/native-cloud/config",
    "registrySrc": "/Users/alissonpedrina/Documents/gitprojects/platform/native-cloud/registry",
    "customerSrc": "/Users/alissonpedrina/Documents/gitprojects/platform/native-cloud/customer",
    "gatewaySrc": "/Users/alissonpedrina/Documents/gitprojects/platform/native-cloud/gateway"
}

params = {
    'args': ['mvn', 'clean', 'install', '-DskipTests'],
    'base': config.src,
    'wait': false,
    'bind': false,
    'out': 'test.txt'
}
let p = cmd(params).run();

let count = 0;
while (true) {
    if (Files.count('test.txt') > count) {
        console.log(Files.line('test.txt', count));
        count += 1;

    }
    if (p.isStopped()) {
        break;
    }
}


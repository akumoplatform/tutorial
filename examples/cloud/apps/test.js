let config = {
    "src": "C:\\projects\\native-cloud\\",
    "configSrc": "C:\\projects\\native-cloud\\config",
    "registrySrc": "C:\\projects\\native-cloud\\registry",
    "customerSrc": "C:\\projects\\native-cloud\\customer",
    "gatewaySrc": "C:\\projects\\native-cloud\\gateway",
    "java": "C:\\programs\\jdk-15.0.1",
    "mvn": "C:\\programs\\apache-maven-3.6.3\\bin\\mvn.cmd"
}

params = {
    'args': [config.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.src,
    'wait': false,
    'bind': false,
    'out': 'test.txt'
}
let p = cmd(params).run();

print('test.txt', p);

if (p.status() === 'error') {
    console.log('deu merda...');
} else if (p.status() === 'success') {
    console.log('sucesso...');
}


function print(file, p) {
    let count = 0;
    while (true) {
        if (Files.count(file) > count) {
            console.log(Files.line(file, count));
            count += 1;

        }
        if (p.isStopped()) {
            break;
        }
    }
}


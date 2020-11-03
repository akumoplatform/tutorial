io.rel('stopServices.js');
io.rel('config.js');

let springProfile = '-Dspring.profiles.active=dev';
let params = {
    'args': ['mvn', 'clean', 'install', '-DskipTests=true'],
    'base': config.mac.src,
    'env': { 'JAVA_HOME': '/Users/alissonpedrina/Documents/programs/jdk-14.0.1.jdk/Contents/Home' },
    'wait': true
}
let services = [
    {
        'name': 'config',
        'artifact': './target/config.jar',
        'wait': true
    },
    {
        'name': 'admin',
        'artifact': './target/admin.jar',
        'profile': springProfile
    },
    {
        'name': 'registry',
        'artifact': './target/registry.jar',
        'profile': springProfile
    },
    {
        'name': 'gateway',
        'artifact': './target/gateway.jar',
        'profile': springProfile
    },
    {
        'name': 'auth',
        'artifact': './target/authorization-server.jar',
        'profile': springProfile
    },
    {
        'name': 'customer',
        'artifact': './target/customer.jar',
        'profile': springProfile
    }

];
console.log('starting deployment...');

let mvnResult = cmd(params).exe();
console.log(mvnResult.getRaw());
if (Maven.hasError(mvnResult.getRaw())) {
    console.log(mvnResult.getRaw());

} else {
    services.forEach(service => {
        console.log('starting: ' + service.name);
        if (service.profile) {
            params.args = ['java', '-jar', service.profile, service.artifact];

        } else {
            params.args = ['java', '-jar', service.artifact];

        }
        params.base = config.mac.src + service.name;
        params.wait = false;
        params.stop = ' ';
        cmd(params).exe();

    });

}
console.log('end deploy process.');
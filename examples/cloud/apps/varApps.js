let pathConfigFile = 'config-' + System.var('env') + '.json';

let configFilePath = System.var('user.dir') + 
        System.separator() + 
        '..' + 
        System.separator() + 
        pathConfigFile;

let config = JSON.parse(Files.read(configFilePath));

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
        'artifact': './target/config.jar'
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
        'name': 'customer',
        'artifact': './target/customer.jar',
        'profile': springProfile
    }

];
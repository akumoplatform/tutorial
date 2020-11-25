let pathConfigFile = 'config-' + System.var('env') + '.json';

let configFilePath = System.var('user.dir') + 
        System.separator() + 
        '..' + 
        System.separator() + 
        pathConfigFile;

let config = JSON.parse(Files.read(configFilePath));

let springProfile = '-Dspring.profiles.active=dev';
let params = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.src,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
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
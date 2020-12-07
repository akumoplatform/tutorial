let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.src,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false,
    'out': 'log/mvn.log' 
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let springProfile = '-Dspring.profiles.active=dev';
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
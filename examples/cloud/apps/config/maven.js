let millis = new java.util.Date();
let file = System.var('user.dir') + System.separator() + 'log' + System.separator() + 'mvn' + millis.getTime() + '.log';

let newFile = new java.io.File(file);
newFile.createNewFile();

console.log('out ' + file);

let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.src,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false,
    'out': file 
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
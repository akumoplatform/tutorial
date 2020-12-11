let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.registrySrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let sdsParams =
{
    'name': 'sds',
    'artifact': './target/propr-sds-0.0.1-uber.jar'
}


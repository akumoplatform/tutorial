let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.configSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let configParams =
{
    'name': 'config',
    'artifact': './target/propr-config-0.0.1-uber.jar'
}


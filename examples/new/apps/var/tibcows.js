let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.tibcowsSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let tibcowsParams =
{
    'name': 'sds',
    'artifact': './target/propr-tibcows-proprws-0.0.1-uber.jar'
}


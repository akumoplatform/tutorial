let mvnParams = {
    'args': ['cmd.exe', '/C', config.paths.mvn + ' clean install -DskipTests'],
    'base': config.paths.consumerSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let consumerParams =
{
    'name': 'consumer',
    'artifact': './target/propr-lrdb-consumer-0.0.1-uber.jar'
}


let mvnParams = {
    'args': ['cmd.exe', '/c', config.paths.mvn + ' clean install -DskipTests'],
    'base': config.paths.processorSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let processorParams =
{
    'name': 'processor',
    'artifact': './target/propr-lrdb-processor-0.0.1-uber.jar'
}


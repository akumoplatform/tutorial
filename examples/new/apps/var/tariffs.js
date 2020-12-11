let mvnParams = {
    'args': ['cmd.exe', '/c', config.paths.mvn +' clean install -DskipTests'],
    'base': config.paths.tariffsSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let tariffsParams =
{
    'name': 'tariffs',
    'artifact': './target/propr-tariffs-0.0.1-uber.jar'
}


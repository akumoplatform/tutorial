let mvnParams = {
    'args': ['cmd.exe', '/c', config.paths.mvn +' clean install -DskipTests'],
    'base': config.paths.cocomoSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let cocomoParams =
{
    'name': 'cocomo',
    'artifact': './target/propr-cocomo-0.0.1-uber.jar'
}


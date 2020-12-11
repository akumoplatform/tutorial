/** 
let millis = new java.util.Date();
let file = System.var('user.dir') +
    System.separator() +
    'log' +
    System.separator() +
    'coms' +
    System.separator() +
    'coms' +
    millis.getTime() +
    '.log';
*/
let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.comsSrc,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': true,
    'bind': true
}

let mvnServicesParams = {
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false
}

let comsParams =
{
    'name': 'coms',
    'artifact': './target/propr-coms-0.0.1-uber.jar'
}


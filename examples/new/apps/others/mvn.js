io.rel('var/global.js');
io.rel('core/functions.js');

let millis = new java.util.Date();
let file = System.var('user.dir') + 
    System.separator() + 
    'log' + 
    System.separator() +
    'maven' + 
    millis.getTime() + 
    '.log';

let logFile = new java.io.File(file);
logFile.createNewFile();

let mvnParams = {
    'args': [config.paths.mvn, 'clean', 'install', '-DskipTests'],
    'base': config.paths.parent,
    'env': { 'JAVA_HOME': config.paths.java },
    'wait': false,
    'out': file
}

let p = cmd(mvnParams).run();
waitProcess(p);
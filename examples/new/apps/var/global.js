let pathConfigFile = 'config-' + System.var('env') + '.json';
let configFilePath = System.var('user.dir') + 
        System.separator() + 
        '..' + 
        System.separator() + 
        pathConfigFile;

var config = JSON.parse(Files.read(configFilePath));

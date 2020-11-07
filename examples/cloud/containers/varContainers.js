let pathConfigFile = 'config-' + System.var('env') + '.json';

let configFilePath = System.var('user.dir') + 
        System.separator() + 
        '..' + 
        System.separator() + 
        pathConfigFile;

let config = JSON.parse(Files.read(configFilePath));

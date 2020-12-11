io.rel('var/global.js');

let brokerParams = {
    'args': ['cmd.exe','/c','activemq.bat start'],
    'base': config.paths.broker,
    'wait': true,
    'bind': true
}

cmd(brokerParams).exe();

io.rel('var/global.js');
io.rel('var/config.js');
io.rel('core/functions.js');

console.log('starting CONFIG service...');

let configProcess = cmd(mvnParams).run();

waitProcess(configProcess);

if (configProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.src + configParams.name;
    mvnServicesParams.args = ['java', '-jar', configParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

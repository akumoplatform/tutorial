io.rel('var/global.js');
io.rel('var/cocomo.js');
io.rel('core/functions.js');

console.log('starting COCOMO service...');

let cocomoProcess = cmd(mvnParams).run();

waitProcess(cocomoProcess);

if (cocomoProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.src + cocomoParams.name;
    mvnServicesParams.args = ['java', '-jar', cocomoParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

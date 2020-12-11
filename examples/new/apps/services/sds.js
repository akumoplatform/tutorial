io.rel('var/global.js');
io.rel('var/sds.js');
io.rel('core/functions.js');

console.log('starting SDS service...');

let sdsProcess = cmd(mvnParams).run();

waitProcess(sdsProcess);

if (sdsProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.src + sdsParams.name;
    mvnServicesParams.args = ['java', '-jar', sdsParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

io.rel('var/global.js');
io.rel('var/coms.js');
io.rel('core/functions.js');

console.log('starting COMS service...');

let comsProcess = cmd(mvnParams).run();

waitProcess(comsProcess);

if (comsProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.src + comsParams.name;
    mvnServicesParams.args = ['java', '-jar', comsParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

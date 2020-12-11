io.rel('var/global.js');
io.rel('var/tibcows.js');
io.rel('core/functions.js');

console.log('starting TIBCOWS service...');

let tibcowsProcess = cmd(mvnParams).run();

waitProcess(tibcowsProcess);

if (tibcowsProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.tibcowsSrc + 'proprws';
    mvnServicesParams.args = ['java', '-jar', tibcowsParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

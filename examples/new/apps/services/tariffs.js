io.rel('var/global.js');
io.rel('var/tariffs.js');
io.rel('core/functions.js');

console.log('starting TARIFFS service...');

let tariffsProcess = cmd(mvnParams).run();

waitProcess(tariffsProcess);

if (tariffsProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.src + tariffsParams.name;
    mvnServicesParams.args = ['java', '-jar', tariffsParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

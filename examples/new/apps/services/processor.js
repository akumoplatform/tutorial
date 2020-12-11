io.rel('var/global.js');
io.rel('var/processor.js');
io.rel('core/functions.js');

console.log('starting PROCESSOR service...');

let processorProcess = cmd(mvnParams).run();

waitProcess(processorProcess);

if (processorProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.processorSrc;
    mvnServicesParams.args = ['java', '-jar', processorParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

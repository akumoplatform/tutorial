io.rel('var/global.js');
io.rel('var/consumer.js');
io.rel('core/functions.js');

console.log('starting CONSUMER service...');

let consumerProcess = cmd(mvnParams).run();

waitProcess(consumerProcess);

if (consumerProcess.status() == 'success') {
    mvnServicesParams.base = config.paths.consumerSrc;
    mvnServicesParams.args = ['java', '-jar', consumerParams.artifact];
    mvnServicesParams.bind = true;

    cmd(mvnServicesParams).run();

}

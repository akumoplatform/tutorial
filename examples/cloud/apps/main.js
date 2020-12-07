io.rel('config/config.js');
io.rel('config/maven.js');
io.rel('core/functions.js');

console.log('starting deployment...');

let mvnProcess = cmd(mvnParams).run();
print('log/mvn.log', mvnProcess);

if (mvnProcess.status() == 'success') {
	console.log('starting services...');
    services.forEach(service => {
        console.log('starting: ' + service.name);
        mvnServicesParams.base = config.paths.src + service.name;
        if (service.profile) {
            mvnServicesParams.args = ['java', '-jar', service.profile, service.artifact];

        } else {
            mvnServicesParams.args = ['java', '-jar', service.artifact];

        }
        console.log('ver: ' + JSON.stringify(mvnServicesParams));
        cmd(mvnServicesParams).run();

    });

}
console.log('end deploy process.');
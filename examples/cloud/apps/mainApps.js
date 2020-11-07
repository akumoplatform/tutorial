io.rel('stopApps.js');
io.rel('varApps.js');

console.log('starting deployment...');

let mvnResult = cmd(params).exe();
console.log(mvnResult.getRaw());

if (Maven.hasError(mvnResult.getRaw())) {
    console.log(mvnResult.getRaw());

} else {
    params.wait = false;
    params.stop = 'Started';
    
    services.forEach(service => {
        console.log('starting: ' + service.name);
        params.base = config.mac.src + service.name;
        if (service.profile) {
            params.args = ['java', '-jar', service.profile, service.artifact];

        } else {
            params.args = ['java', '-jar', service.artifact];

        }
        cmd(params).exe();

    });

}
console.log('end deploy process.');
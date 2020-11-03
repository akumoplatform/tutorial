io.rel('stopServices.js');
io.rel('config.js');

console.log('starting deployment...');

let mvnResult = cmd(params).exe();
console.log(mvnResult.getRaw());
if (Maven.hasError(mvnResult.getRaw())) {
    console.log(mvnResult.getRaw());

} else {
    services.forEach(service => {
        console.log('starting: ' + service.name);
        if (service.profile) {
            params.args = ['java', '-jar', service.profile, service.artifact];

        } else {
            params.args = ['java', '-jar', service.artifact];

        }
        params.base = config.mac.src + service.name;
        params.wait = false;
        params.stop = 'Started';
        cmd(params).exe();

    });

}
console.log('end deploy process.');
io.lib('/docker/docker.js');

let services = ['akumo/customer', 'akumo/gateway', 'akumo/registry', 'akumo/config'];

services.forEach(service => {
    let container = docker.ps(service);
    if (service) {
        docker.stop({ 'args': [container[0].containerId], 'wait': true });
        wait(700);
        docker.rm({ 'args': [container[0].containerId], 'wait': true });

    }

});
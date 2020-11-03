Cmds.wait(true);
let pids = Cmds.pids(['admin.jar','config.jar','registry.jar','gateway.jar','authorization-server.jar','customer.jar']);

pids.forEach(pid => {
    console.log('killing: ' + pid);
    
});

Cmds.kill(pids);
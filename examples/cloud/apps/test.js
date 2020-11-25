Cmds.wait(true);
let pids = Cmds.pids(['config.jar','registry.jar','gateway.jar','customer.jar']);

pids.forEach(pid => {
    console.log('killing: ' + pid);
    
});

Cmds.kill(pids);